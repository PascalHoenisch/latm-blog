import {authors} from "$db/blog";
import type {PageServerLoad} from './$types'

import {generateSignedUrl} from "$lib/helper/imageUri";

export const load: PageServerLoad = async function () {
    const data = await authors.find().toArray();

    // replace image path with signed url
    data.map(author => {
        author.imageUri = generateSignedUrl(author.imageUri);
    });

    return {
        authors: structuredClone(data)
    };
};
