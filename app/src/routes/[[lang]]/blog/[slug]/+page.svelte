<script>
    import {locale, t} from "$lib/lang/i18n.js";
    import Meta from "$lib/blog/meta.svelte";

    export let data;
    $: ({post} = data)
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
<div class="pt-5">
    {@html post.content[data.language] }
</div>