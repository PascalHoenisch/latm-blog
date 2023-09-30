import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {blogs} from "$db/blog";

// import { posts } from '../data.js';

// @ts-ignore because tutorial says so
export const load: PageServerLoad = async function ({params}) {
    const $slugSearchFilterTitle: string = "slug." + params.lang

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

    return {
        post: structuredClone(data)
    };
}
