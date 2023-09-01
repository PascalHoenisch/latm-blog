import { locales } from "$lib/lang/i18n.js";

// @ts-ignore
export function load({params}) {
    // @ts-ignore
    let language = locales[params.lang ?? 'en'];

    return {
        language: language,
    };
}