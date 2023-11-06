import {authors} from "$db/blog";
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async function () {
    const data = await authors.find().toArray();

    console.log(data)

    return {
        authors: structuredClone(data)
    }
}