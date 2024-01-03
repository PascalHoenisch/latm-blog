<script>
    export let imageDescription;
    export let aboutText;
    export let imageUri;
    export let language;
    export let name;
</script>
<article class="md:grid md:grid-cols-3 mt-4 gap-4 pb-2">
    <div class="md:min-w-32">
        <h2 class="visible md:hidden">{name}</h2>
        <img
                src="{imageUri}"
                alt="{imageDescription[language]}"
                loading="lazy"
        >
    </div>
    <div class="md:col-span-2">
        <div class="col-12">
            <p>
                {@html aboutText[language]}
            </p>
        </div>
        <h2 class="invisible md:visible">{name}</h2>
    </div>
</article>