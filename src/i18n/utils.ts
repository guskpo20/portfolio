import english from './en.json';
import spanish from './es.json';

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLanguage = 'es';

export const ui = {
    en: english,
    es: spanish,
} as const;

export const getLanguageFromURL = (pathname: string) => {
    const [, lang] = pathname.split('/');
    if (lang in languages) return lang as keyof typeof languages;
    return defaultLanguage;
};

export const useTranslations = (lang: keyof typeof languages) => {
    return function t(key: string) {
        const keys = key.split('.');
        let value = ui[lang];
        for (const k of keys) {
            value = value[k as keyof typeof value] as any;
        }
        return value;
    };
};