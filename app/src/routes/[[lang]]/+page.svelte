<script>
    import {locale, t} from "./i18n.js";
    export let data;
    locale.set(data.language)
</script>
<p>test</p>
<h1>{$t("homepage.title")}</h1>
