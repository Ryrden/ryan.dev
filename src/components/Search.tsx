import ArrowCard from "@components/ArrowCard"
import SearchBar from "@components/SearchBar"
import type { ui } from "@i18n/ui"
import { useTranslations } from "@i18n/utils"
import type { CollectionEntry } from "astro:content"
import Fuse from "fuse.js"
import { createEffect, createSignal } from "solid-js"

type Props = {
  data: CollectionEntry<"blog">[]
  locale: keyof typeof ui
}

export default function Search({data, locale}: Props) {
  const t = useTranslations(locale)
  const [query, setQuery] = createSignal("")
  const [results, setResults] = createSignal<CollectionEntry<"blog">[]>([])

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    if (query().length < 2) {
      setResults([])
    } else {
      setResults(fuse.search(query()).map((result) => result.item))
    }
  })

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  return (
    <div class="flex flex-col">
      <SearchBar onSearchInput={onSearchInput} query={query} setQuery={setQuery} placeholderText={t('search.placeholder')} />
      {(query().length >= 2 && results().length >= 1) && (
        <div class="mt-12">
          <div class="text-sm uppercase mb-2">
            {t('search.results').replace('{0}', String(results().length)).replace('{1}', query())}
          </div>
          <ul class="flex flex-col gap-3">
            {results().map(result => (
              <li>
                <ArrowCard entry={result} pill={true} locale={locale} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}