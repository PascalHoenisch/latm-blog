<script lang="ts">
    import {locale, t} from "$lib/lang/i18n.js";
    import Author from "$lib/about/author.svelte";

    export let data;
    locale.set(data.language)

    $: ({authors} = data)
</script>
<h2>{$t("About")}</h2>

<section>
    {#each authors as author}
        <Author
                imageServerUrl="{author.imageServerUrl}"
                imageDescription="{$t(author.alt)}"
                imagePath="{author.imageUri}"
                aboutText="{$t(author.about)}"
        />
    {/each}
</section>