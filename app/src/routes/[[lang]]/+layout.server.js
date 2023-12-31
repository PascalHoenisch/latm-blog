import {locales} from "$lib/lang/i18n.js";
import {IMAGE_SERVER_URL} from "$env/static/private";

// @ts-ignore
export function load({params}) {
    // @ts-ignore
    // set language fallback to german /de prefix
    let language = locales[params.lang ?? 'de'];
    return {
        language: language,
        imageServerUrl: IMAGE_SERVER_URL,
    };
}