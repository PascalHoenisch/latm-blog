import {blogs} from "$db/blog";
import type {PageServerLoad} from './$types'
import crypto from 'crypto';
import {IMAGE_SERVER_SECURITY_KEY, IMAGE_SERVER_URL} from "$env/static/private";

// todo make transformation generic, depending on the view port of the requesting device
const transformations = '/300x200/smart';
// Your SECURITY_KEY from the thumbor.conf file
function generateSignedUrl(securityKey: string, transformations: string, imageUri: string, imageServer: string) {
    const path = `${transformations}/${imageUri}`;
    const hash = crypto.createHmac('sha1', securityKey).update(path).digest('hex');

    return `${imageServer}/${hash}${path}`;
}
const security_key = IMAGE_SERVER_SECURITY_KEY;
const imageServerUrl = IMAGE_SERVER_URL;

/**
 * Fetches and returns a list of blogs with limited fields (only for preview purposes) from the database.
 * The fetched blogs will have their title image path signed with a security key.
 *
 * @returns {Promise<{blogs: Array}>} An object containing an array of blogs with limited fields.
 */
export const load: PageServerLoad = async function () {
    const data = await blogs.find({}, {limit: 50, projection: {
            title: 1,
            slug: 1,
            date: 1,
            author: 1,
            description: 1,
            tag: 1,
            title_image: 1
        }}).toArray();

    data.forEach(blog => {
        blog.title_image.path = generateSignedUrl(
            security_key,
            transformations,
            blog.title_image.path,
            imageServerUrl
        );

        console.log(blog.title_image.path)
    });

    return {
        blogs: structuredClone(data)
    }
}