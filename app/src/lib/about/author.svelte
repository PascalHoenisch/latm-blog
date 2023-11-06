<script>
    export let imageServerUrl;
    export let imageDescription;
    export let aboutText;
    export let imagePath
    export let language
    export let name;
</script>
<article class="md:grid md:grid-cols-3 mt-4 gap-4 pb-2">
    <div class="md:min-w-32">
        <h2 class="visible md:hidden">{name}</h2>
        <img
                src="{imageServerUrl}{imagePath}"
                alt="{imageDescription[language]}"
                loading="lazy"
        >
    </div>
    <div class="md:col-span-2">
        <h2 class="invisible md:visible">{name}</h2>
        <div class="col-12">
            {@html aboutText[language]}
        </div>
    </div>
</article>