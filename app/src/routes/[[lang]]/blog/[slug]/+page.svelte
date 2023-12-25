<script>
    import Meta from "$lib/blog/meta.svelte";

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
<div class="pt-5 text-base text-gray-700 blog-entry">
    {@html post.content.cached_html[data.language] }
</div>