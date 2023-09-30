import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {blogs} from "$db/blog";

// import { posts } from '../data.js';

// @ts-ignore because tutorial says so
export const load: PageServerLoad = async function ({params}) {
    const data = blogs.find(
        {slug: params.slug}
)

    if (!data) throw error(404);

    return {
        post: structuredClone(data)
    };
}
