<script lang="ts">
    import {locale, t} from "$lib/lang/i18n.js";

    export let data;
    locale.set(data.language)

</script>
<h2>{$t("Imprint")}</h2>

<section>
    {$t("imprint.legal.text")}
</section>