<script>
    import Meta from "$lib/blog/meta.svelte";

    export let language;
    export let imageServerUrl;
    export let blog;

</script>

<article class="flex flex-col mt-3">
    <div>
        <img
                src="{imageServerUrl}{blog.title_image.path}"
                alt="{blog.title_image.description[language]}"
                loading="lazy"
        >
    </div>
    <div class="mt-5 mb-2">
        <Meta
            language="{language}"
            blog="{blog}"
        />
    </div>
    <div>
        <a href="/{language}/blog/{blog.slug[language]}">
            <h3 class="post-header">
                {blog.title[language]}
            </h3>
        </a>
    </div>
    <div class="text-gray-600 text-sm">
        <a href="/{language}/blog/{blog.slug[language]}">
            {blog.description[language]}
        </a>
    </div>
    <div class="pt-5">
        <div class="flex flex-row">
            <div>
                <img src="{imageServerUrl}/author/the-other-cat.png" alt="author smiling at you"
                     class="rounded-full w-11 h-11">
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