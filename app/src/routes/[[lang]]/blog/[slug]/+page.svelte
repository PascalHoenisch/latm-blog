<script>
    import Meta from "$lib/blog/meta.svelte";
    import {marked} from "marked";
    import {onMount} from "svelte";
    export let data;
    $: ({post} = data);
    let source = data.post.content[data.language];

    let htmlText;

    onMount(() => {
        htmlText = marked(source);
    });
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
<div class="pt-5 text-base text-gray-700">
    {@html htmlText }
</div>