import {generateSignedUrl} from "$lib/helper/imageUri";
import {authors, blogs} from "$db/blog";

export async function getPreviewPosts() {

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
    const data = await blogs.find({}, {
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

    /**
     * Loads blogs and author data, updates image paths, and returns structured data.
     * @returns {Promise<{blogs: Array}>} - An array of blogs with updated image paths and author data.
     */
    const newData = data.map(blog => {
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

    return newData;
}