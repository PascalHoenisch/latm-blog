<script lang="ts">
    import {locale, t} from "$lib/lang/i18n.js";

    export let data;
    locale.set(data.language)

</script>
<h2>{$t("Privacy")}</h2>

<section>
    {$t("privacy.legal.text")}
</section>