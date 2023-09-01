<script lang="ts">
    import {locale, t} from "$lib/lang/i18n.js";
    import type {PageData} from './$types'

    export let data: PageData

    $: ({blogs} = data)
    // export let data;
    locale.set(data.language)
</script>
<h1>{$t("homepage.title")}</h1>

<section>
    {#each blogs as blog}
        <article class="flex flex-col mt-3">
            <div>
                <img src="{data.imageServerUrl}/cat.jpg" alt="blog image">
            </div>
            <div>
                <div class="flex flex-row mt-5 mb-2 text-gray-600">
                    <div class="text-xs me-3">
                        {blog.date}
                    </div>
                    <div class="text-xs font-semibold text-gray-600">
                        {blog.tag}
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-lg font-semibold text-gray-800">
                    {blog.title[data.language]}
                </h3>
            </div>
            <div class="text-gray-600 text-sm">
                {blog.description[data.language]}
            </div>
            <div class="pt-5">
                <div class="flex flex-row">
                    <div>
                        <img src="{data.imageServerUrl}/author/the-other-cat.png" alt="author smiling at you" class="rounded-full w-11 h-11">
                    </div>
                    <div class="ms-3 flex flex-col">
                        <div>
                            {blog.author}
                        </div>
                        <div class="text-sm text-gray-500 font-light">socking the world</div>
                    </div>
                </div>
            </div>
        </article>
        <hr class="text-gray-400 mx-8 mt-6">
    {/each}
</section>