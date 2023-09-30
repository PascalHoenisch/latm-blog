import type {PageServerLoad} from './$types'
import {IMPRINT_MAIL} from "$env/static/private";

export const load: PageServerLoad = async function () {

    return {
        imprintMailAdress: IMPRINT_MAIL
    }
}