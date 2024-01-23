<script>
    import Meta from "$lib/blog/meta.svelte";
    import {t} from "$lib/lang/i18n.js";

    export let data;
    $: ({post} = data);

</script>
<div class="pt-2">
    <h1 class="post-header">{post.title[data.language]}</h1>
</div>
<div>
    <Meta
            language="{data.language}"
            blog="{post}"
    />
</div>
{#if data.language != 'de'}
    <div class="text-blue-800 bg-blue-300 border-gray-900 rounded py-2 px-4 border-1 mt-4">
        <b>{$t('information')}</b>
        <p>{$t('ki.translation.info')}</p>
    </div>
{/if}
<div class="pt-5 text-base text-gray-700 blog-entry">
    {@html post.content.cached_html[data.language] }
</div>