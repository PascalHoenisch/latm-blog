import {locales} from "$lib/lang/i18n.js";
import {IMAGE_SERVER_URL, DOMAIN} from "$env/static/private";

// @ts-ignore
export function load({params}) {
    // @ts-ignore
    // set language fallback to german /de prefix
    let language = locales[params.lang ?? 'de'];
    // check if locale exists and is not malformed
    if (!language || !Object.values(locales).includes(language)) {
        language = 'de';
    }

    return {
        language: language,
        imageServerUrl: IMAGE_SERVER_URL,
        domain: DOMAIN,
    };
}