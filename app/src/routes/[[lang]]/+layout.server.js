import { locales } from "./i18n";
import {writable} from "svelte/store";

// @ts-ignore
export function load({params}) {
    // @ts-ignore
    let language = locales[params.lang ?? 'en'];

    return {
        language: language,
    };
}