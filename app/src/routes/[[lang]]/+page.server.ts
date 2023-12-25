import {authors, blogs} from "$db/blog";
import type {PageServerLoad} from './$types'
import crypto from 'crypto';
import url from 'url';
import {IMAGE_SERVER_SECURITY_KEY, IMAGE_SERVER_URL} from "$env/static/private";

// todo make transformation generic, depending on the view port of the requesting device
const transformations = '600x400/smart';
const imageServerUrl: string = IMAGE_SERVER_URL;

function generateSignedUrl(transformations: string, imageUri: string) {
    const securityKey: string = IMAGE_SERVER_SECURITY_KEY;
    const imageServer: string = IMAGE_SERVER_URL;

    const urlToSign: string = `${transformations}/${imageUri}`;
    // Create a HMAC SHA1 hash and digest it as base64
    const hmac = crypto.createHmac('sha1', securityKey);
    hmac.update(`${transformations}/${imageUri}`);
    let hash: string = hmac.digest('base64');

// Replace '+' with '-', '/' with '_' and remove trailing '='
    hash = hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

// Create the safe URL by appending the encoded_signature to the beginning of the URL
    return url.resolve(imageServer, `/${encodeURIComponent(hash)}=/${urlToSign}`);
}

/**
 * Fetches and returns a list of blogs with limited fields (only for preview purposes) from the database.
 * The fetched blogs will have their title image path signed with a security key.
 *
 * @returns {Promise<{blogs: Array}>} An object containing an array of blogs with limited fields.
 */
export const load: PageServerLoad = async function () {
    // fetch authors
    const authorData = await authors.find({}, {
        limit: 50, projection: {
            name: 1,
            slogan: 1,
            previewImageUri: 1,
            previewImageAlt: 1
        }
    }).toArray();
    const authorTransformation = "300x300/filters:round_corner(20,255,255,255)";

    // Update each author's previewImageUri
    authorData.forEach(author => {
        const updatedPreviewImagePath = `${imageServerUrl}/unsafe/${authorTransformation}/${author.previewImageUri}`
        author.previewImageUri = updatedPreviewImagePath;
    });

    // fetch blogs
    const data = await blogs.find({}, {
        limit: 50, projection: {
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

    const newData = data.map(blog => {
        // Find the corresponding author data
        const authorDataItem = authorData.find(author => author.name === blog.author);
        // Update title image path
        const updatedTitleImagePath = generateSignedUrl(transformations, blog.title_image.path);
        // const updatedTitleImagePath = `${imageServerUrl}/unsafe${transformations}/${blog.title_image.path}`;
        console.log(updatedTitleImagePath);
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
        blogs: structuredClone(newData)
    };
};