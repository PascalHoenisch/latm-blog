<script lang="ts">
    import {locale, t} from "$lib/i18n.js";

    export let data;
    locale.set(data.language)

</script>
<h2>{$t("About")}</h2>

<section>
    {$t("about.proclaimed")}
</section>