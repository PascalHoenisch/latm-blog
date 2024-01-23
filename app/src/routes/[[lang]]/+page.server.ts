import type {PageServerLoad} from './$types'
import {getPreviewPosts} from "$lib/blog/get-post-preview";
import {authors, blogs} from "$db/blog";
import {generateSignedUrl} from "$lib/helper/imageUri";

/**
 * Fetches and returns a list of blogs with limited fields (only for preview purposes) from the database.
 * The fetched blogs will have their title image path signed with a security key.
 *
 * @returns {Promise<{blogs: Array}>} An object containing an array of blogs with limited fields.
 */
export const load: PageServerLoad = async function () {
    // fetch authors
    const authorData = await authors.find({}, {
        projection: {
            name: 1,
            slogan: 1,
            previewImageUri: 1,
            previewImageAlt: 1
        }
    }).toArray();

    // Update each author's previewImageUri
    authorData.forEach(author => {
        author.previewImageUri = generateSignedUrl(author.previewImageUri, "100x100/filters:round_corner(20,255,255,255)");
    });

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
        const authorDataItem = authorData.find(author => author.name === blog.author);
        // Update title image path
        const updatedTitleImagePath = generateSignedUrl(blog.title_image.path);
        // Return updated blog object
        return {
            ...blog,
            author: authorDataItem ? authorDataItem : blog.author,  // update author if found in authorData, otherwise keep existing
            title_image: {
                ...blog.title_image,
                path: updatedTitleImagePath
            }
        };
    });

    return {
       blogs: structuredClone(postsMappedWithAuthor)
    };
};