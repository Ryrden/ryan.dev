import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import partytown from "@astrojs/partytown"

// https://astro.build/config
export default defineConfig({
  site: "https://ryan.dev.br",
  integrations: [
    mdx(), 
    sitemap(),
    solidJs(), 
    tailwind({ applyBaseStyles: false }), 
    partytown({ config: { forward: ['dataLayer.push'] } })
  ],
  // TODO: Add support do Mermaid into blog markdown
  // READ: https://dev.to/fkurz/extending-astrojs-markdown-processing-with-remark-and-rehype-plugins-m1k
})