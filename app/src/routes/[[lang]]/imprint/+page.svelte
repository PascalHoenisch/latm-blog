<script lang="ts">
    import {locale, t} from "$lib/lang/i18n.js";

    export let data;

    export let imprintMailAdress;
    locale.set(data.language)

</script>
<h2>{$t("Imprint")}</h2>

<section>
    <div>
        {$t("imprint.legal.text")}
    </div>
    <div class="mt-2">
        {data.imprintMailAdress}
    </div>
</section>