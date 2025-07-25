import ArrowCard from "@components/ArrowCard"
import { ui } from "@i18n/ui"
import { useTranslations } from "@i18n/utils"
import { cn } from "@lib/utils"
import type { CollectionEntry } from "astro:content"
import { createEffect, createMemo, createSignal, For } from "solid-js"

type Props = {
  tags: string[]
  data: CollectionEntry<"blog">[]
  locale: keyof typeof ui
}

export default function Blog({ data, tags, locale }: Props) {
  // Ensure locale is a valid key in the UI object
  // const lang = getLangFromUrl(Astro.urlll) || "en"
  // console.log(lang)
  const t = useTranslations(locale)
  const [filter, setFilter] = createSignal(new Set<string>())
  const [posts, setPosts] = createSignal<CollectionEntry<"blog">[]>([])

  // Conta a frequência de cada tag nos posts
  const tagCounts = createMemo(() => {
    const counts: Record<string, number> = {}
    data.forEach(entry => {
      entry.data.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1
      })
    })
    return counts
  })

  // Ordena as tags pela contagem
  const sortedTags = createMemo(() =>
    [...tags].sort((a, b) => (tagCounts()[b] ?? 0) - (tagCounts()[a] ?? 0))
  )

  createEffect(() => {
    setPosts(data.filter((entry) =>
      Array.from(filter()).every((value) =>
        entry.data.tags.some((tag: string) =>
          tag.toLowerCase() === String(value).toLowerCase()
        )
      )
    ))
    console.log("posts", posts())
    console.log("Filtered posts count:", posts().length)
  })

  function toggleTag(tag: string) {
    setFilter((prev) =>
      new Set(prev.has(tag)
        ? [...prev].filter((t) => t !== tag)
        : [...prev, tag]
      )
    )
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <div class="sticky top-24">
          <div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">{t('blog.filters')}</div>
          <ul class="flex flex-wrap sm:flex-col gap-1.5">
            <For each={sortedTags()}>
              {(tag) => (
                <li>
                  <button
                    onClick={() => toggleTag(tag)}
                    class={cn(
                      "w-full px-2 py-1 rounded",
                      "whitespace-nowrap overflow-hidden overflow-ellipsis",
                      "flex justify-between items-center",
                      "bg-black/5 dark:bg-white/10",
                      "hover:bg-black/10 hover:dark:bg-white/15",
                      "transition-colors duration-300 ease-in-out",
                      filter().has(tag) && "text-black dark:text-white"
                    )}
                  >
                    <div class="flex gap-2 items-center">
                      <svg class={cn(
                        "size-5 fill-black/50 dark:fill-white/50",
                        "transition-colors duration-300 ease-in-out",
                        filter().has(tag) && "fill-black dark:fill-white"
                      )}>
                        <use href={`/ui.svg#square`} class={cn(!filter().has(tag) ? "block" : "hidden")} />
                        <use href={`/ui.svg#square-check`} class={cn(filter().has(tag) ? "block" : "hidden")} />
                      </svg>
                      {tag}
                    </div>
                    <span class="text-xs opacity-70">{tagCounts()[tag] ?? 0}</span>
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            {t('blog.showing').replace('{0}', String(posts().length)).replace('{1}', String(data.length))}
            {/* TODO: Adicionar paginação */}
          </div>
          <ul class="flex flex-col gap-3">
            {posts().map((post) => (
              <li>
                <ArrowCard entry={post} locale={locale} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
