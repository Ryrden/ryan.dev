import ArrowCard from "@components/ArrowCard"
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

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  return (
    <div class="flex flex-col">
      <div class="relative">
        <input 
          name="search" 
          type="text" 
          value={query()} 
          onInput={onInput} 
          autocomplete="off" 
          spellcheck={false} 
          placeholder={t('search.placeholder')} 
          class="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-black dark:text-white bg-black/5 dark:bg-white/15 border border-black/10 dark:border-white/20 focus:border-black focus:dark:border-white"
        />
        <svg class="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current">
          <use href={`/ui.svg#search`}/>
        </svg>
      </div>
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