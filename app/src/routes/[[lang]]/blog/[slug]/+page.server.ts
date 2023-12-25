import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {blogs} from "$db/blog";
import {marked} from "marked";
import {generateSignedUrl} from "$lib/helper/imageUri";

// @ts-ignore because tutorial says so
export const load: PageServerLoad = async function ({params}) {

    const data = await blogs.findOne(
        {
            $or: [
                {"slug.de": params.slug},
                {"slug.en": params.slug},
                {"slug.es": params.slug},
            ]
        },
        {
            projection: {
                title: 1,
                slug: 1,
                date: 1,
                tag: 1,
                content: 1,
            }
        }
    );

    if (!data) throw error(404);

    let updated: boolean = false;
    // For each language, convert the Markdown to HTML, replace image links, and store the HTML content
    for (const lang of ['de', 'en', 'es']) {
        // Only convert if cached html is empty and markdown is not empty
        if (data.content.cached_html[lang].trim() === '' && data.content.md[lang].trim() !== '') {
            let markdownContent = data.content.md[lang];
            // Escape single quotes
            markdownContent = markdownContent.replace(/'/g, "\'");
            // Escape double quotes
            markdownContent = markdownContent.replace(/"/g, "\"");
            // Find all the images' raw paths in markdownContent within round brackets after "!"
            const regex = /!\[.*?\]\((.*?)\)/g;
            let match;

            // Loop over all regex matches
            while ((match = regex.exec(markdownContent)) !== null) {
                // match[1] gives the content that is inside the round brackets (image path)
                const imagePath: string = match[1];
                const signedUrl: string = generateSignedUrl(imagePath);
                // Replace the original image path with the signed URL
                markdownContent = markdownContent.replace(imagePath, signedUrl);
            }

            // Now markdownContent has all images paths replaced with signed URLs

            let htmlContent: string | Promise<string> = marked(markdownContent);
            if (typeof htmlContent === "string") {
                // Escape single quotes
                htmlContent = htmlContent.replace(/'/g, "\'");
                // Escape double quotes
                htmlContent = htmlContent.replace(/"/g, "\"");
            }

            data.content.cached_html[lang] = `${htmlContent}`;
            // Store the html in the db
            await blogs.updateOne({_id: data._id}, {
                $set: {
                    'content.cached_html': data.content.cached_html
                }
            });
        }
    }

    return {
        post: structuredClone(data)
    };
};
