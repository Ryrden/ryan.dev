import { ui, defaultLang } from './ui';

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

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  }
}