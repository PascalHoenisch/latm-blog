<script>
    export let imageServerUrl;
    export let imageDescription;
    export let aboutText;
    export let imagePath
</script>
<article class="flex flex-col md:flex-row mt-6 pb-2">
    <div class="md:min-w-32 md:pe-3">
        <img
                src="{imageServerUrl}{imagePath}"
                alt="{imageDescription}"
                loading="lazy"
        >
    </div>
    <div>
        {@html aboutText}
    </div>
</article>