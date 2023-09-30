import type {PageServerLoad} from '../../../../.svelte-kit/types/src/routes'

export const load: PageServerLoad = async function () {
    const data = null

    return {
        blogs: structuredClone(data)
    }
}