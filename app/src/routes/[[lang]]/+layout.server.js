import {locales} from "$lib/lang/i18n.js";
import {IMAGE_SERVER_URL, DOMAIN} from "$env/static/private";
// todo uncomment error check and fix issues
//import {Error} from "svelte-check";
import {error} from "@sveltejs/kit";

// @ts-ignore
export function load({params}) {
    // set language fallback to german /de prefix
    // @ts-ignore
    let language = locales[params.lang ?? 'de'];
    // check if locale exists and is not malformed
    if (!language || !Object.values(locales).includes(language)) {
        // return a 404 Language not found svelte kit error code
        error(404, {message: "Language not found" });
        // todo add error template
        language = 'de';
    }

    return {
        language: language,
        imageServerUrl: IMAGE_SERVER_URL,
        domain: DOMAIN,
    };
}