import {generateSignedUrl} from "$lib/helper/imageUri";
import {authors, blogs} from "$db/blog";

/**
 * Fetches and returns a list of blogs with limited fields (only for preview purposes) from the database.
 * The fetched blogs will have their title image path signed with a security key.
 *
 * @returns {Promise<{blogs: Array}>} An object containing an array of blogs with limited fields.
 */
export async function getPreviewPosts() {

    const previewPosts = blogs.find({}, {
        limit: 50, projection: {
            id: 1,
            title: 1,
            slug: 1,
            date: 1,
            author: 1,
            description: 1,
            tag: 1,
            title_image: 1
        }
    })
        .sort({date: -1})
        .toArray();

    return previewPosts;
}