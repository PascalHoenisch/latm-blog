<script lang="ts">
    import {locale, t} from "$lib/lang/i18n.js";
    import type {PageData} from './$types';
    import BlogPreview from "$lib/blog/preview.svelte";


    export let data: PageData
    $: ({blogs} = data)
    // export let data;
    locale.set(data.language)
</script>

<section>
    {#each blogs as blog}
        <BlogPreview
                language="{data.language}"
                blog="{blog}"
                imageServerUrl="{data.imageServerUrl}"
        />
    {/each}
</section>