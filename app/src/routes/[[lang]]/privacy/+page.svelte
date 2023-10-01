<script lang="ts">
    import {locale, t} from "$lib/lang/i18n.js";
    import EnglishPrivacyLegalText from "$lib/privacy/english.svelte";
    import GermanPrivacyLegalText from "$lib/privacy/german.svelte";

    export let data;
    locale.set(data.language)

</script>
<h2>{$t("Privacy")}</h2>

<section class="legal-text mb-4">
    {#if data.language == "de"}
        <GermanPrivacyLegalText
            author="{data.author}"
            website="{data.website}"
            country="{data.country}"
            phone="{data.phone}"
            city="{data.city}"
            street="{data.street}"
        />
    {:else}
        <EnglishPrivacyLegalText/>
    {/if}
</section>