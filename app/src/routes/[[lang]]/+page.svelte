<script lang="ts">
    import {locale, t} from "./i18n.js";
    import type {PageData} from './$types'

    export let data: PageData

    console.log(data.language)

    $: ({blogs} = data)
    // export let data;
    locale.set(data.language)
</script>
<p>test</p>
<!--<h1>{$t("homepage.title")}</h1>-->

<section>
    {#each blogs as blog}
        <article>
            <h3>{blog.title}</h3>
        </article>
    {/each}
</section>