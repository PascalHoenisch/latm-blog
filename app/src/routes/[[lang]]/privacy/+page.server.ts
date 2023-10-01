import type {PageServerLoad} from './$types'
import {AUTHOR, CITY, COUNTRY, MAIL, PHONE, STREET, WEBSITE} from "$env/static/private";

export const load: PageServerLoad = async function () {

    return {
        author: AUTHOR,
        website: WEBSITE,
        country: COUNTRY,
        email: MAIL,
        phone: PHONE,
        city: CITY,
        street: STREET
    }
}