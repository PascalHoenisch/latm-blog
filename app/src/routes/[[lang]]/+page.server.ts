import type {PageServerLoad} from './$types'
import {getPreviewPosts} from "$lib/blog/get-post-preview";

/**
 * Fetches and returns a list of blogs with limited fields (only for preview purposes) from the database.
 * The fetched blogs will have their title image path signed with a security key.
 *
 * @returns {Promise<{blogs: Array}>} An object containing an array of blogs with limited fields.
 */
export const load: PageServerLoad = async function () {
    const posts = getPreviewPosts();

    return {
        blogs: structuredClone(posts)
    };
};