import {blogs} from "$db/blog";
import type {PageServerLoad} from './$types'
import * as devalue from "devalue";

export const load: PageServerLoad = async function () {
    const data = await blogs.find({}, {limit: 50, projection: {
            title: 1,
            date: 1,
            author: 1,
            description: 1,
            tag: 1,
            title_image: 1
        }}).toArray();

    return {
        blogs: structuredClone(data)
    }
}