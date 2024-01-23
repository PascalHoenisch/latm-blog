import type {PageServerLoad} from './$types'
import {getPreviewPosts} from "$lib/blog/get-post-preview";
import {authors, blogs} from "$db/blog";
import {generateSignedUrl} from "$lib/helper/imageUri";
import {getPreviewAuthors} from "$lib/author/preview";

/**
 * Fetches and returns a list of blogs with limited fields (only for preview purposes) from the database.
 * The fetched blogs will have their title image path signed with a security key.
 *
 * @returns {Promise<{blogs: Array}>} An object containing an array of blogs with limited fields.
 */
export const load: PageServerLoad = async function () {
    // fetch authors
    const authorData = await getPreviewAuthors();

    // fetch blogs
    // @ts-ignore
    // @ts-ignore
    const data = await getPreviewPosts();

    /**
     * Loads blogs and author data, updates image paths, and returns structured data.
     * @returns {Promise<{blogs: Array}>} - An array of blogs with updated image paths and author data.
     */
    const postsMappedWithAuthor = data.map(blog => {
        // Find the corresponding author data
        // @ts-ignore author does not exist, because it exists
        const authorDataItem = authorData.find(author => author.name === blog.author);
        // Return updated blog object
        return {
            ...blog,
            // @ts-ignore author does not exist, because it exists
            author: authorDataItem ? authorDataItem : blog.author,  // update author if found in authorData, otherwise keep existing
        };
    });

    return {
       blogs: structuredClone(postsMappedWithAuthor)
    };
};