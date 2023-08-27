import {blogs} from "$db/blog";
import type {PageServerLoad} from './$types'
import * as devalue from "devalue";

export const load: PageServerLoad = async function () {
    const data = await blogs.find({}, {limit: 50, projection: {
            title: 1
        }}).toArray();

    console.log('data', data)

    return {
        blogs: structuredClone(data)
    }
}