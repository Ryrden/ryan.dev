import type { APIRoute } from "astro"

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim()

export const getStaticPaths = () => {
  return [
    { params: { locale: "en" } },
    { params: { locale: "pt-br" } },
  ]
}

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
