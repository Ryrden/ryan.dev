import { ui, defaultLang, languages } from './ui';

// The default language (English) lives at the site root ("/blog"),
// every other language keeps its prefix ("/pt-br/blog").

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getRouteFromUrl(url: URL) {
  const [lang, route] = url.pathname.split('/').slice(1);
  if (lang in ui) return route;
  return url.pathname;
}

// "" for the default language, "/pt-br" for the others
export function getLocalePrefix(lang: string) {
  return lang === defaultLang ? '' : `/${lang}`;
}

// localizePath("en", "/blog") -> "/blog", localizePath("pt-br", "/blog") -> "/pt-br/blog"
export function localizePath(lang: string, path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${getLocalePrefix(lang)}${normalized}`;
}

// The current path without its language prefix, used by the language switcher
export function getPathWithoutLang(url: URL) {
  const prefix = getLocalePrefix(getLangFromUrl(url));
  return url.pathname.slice(prefix.length) || '/';
}

// Value of the [...locale] route param: undefined puts the page at the root
export function getLocaleParam(lang: string) {
  return lang === defaultLang ? undefined : lang;
}

// getStaticPaths for pages that exist once per language
export function getLocaleStaticPaths() {
  return Object.keys(languages).map(lang => ({
    params: { locale: getLocaleParam(lang) },
  }));
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  }
}
