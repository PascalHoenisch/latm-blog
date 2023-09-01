import { locales } from "$lib/i18n";

// @ts-ignore
export function load({params}) {
    // @ts-ignore
    let language = locales[params.lang ?? 'en'];

    return {
        language: language,
    };
}