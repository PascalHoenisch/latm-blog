import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async function () {
    const data = null

    return {
        blogs: structuredClone(data)
    }
}