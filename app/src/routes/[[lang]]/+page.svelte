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
        <article class="flex flex-col">
            <div>
                <img src="{data.imageServerUrl}/cat.jpg" alt="blog image">
            </div>
            <div>
                <h3>
                    {blog.title.en}
                </h3>
            </div>
            <div>
                <div class="flex flex-row">
                    <div>
                        {blog.date}
                    </div>
                    <div>
                        {blog.tag}
                    </div>
                </div>
            </div>
            <div>
                {blog.description[data.language]}
            </div>
        </article>
    {/each}
</section>