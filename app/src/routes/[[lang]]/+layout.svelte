<script>
    import {t, locale} from "./i18n.js";
    import "$css/app.css";

    export let data;
    locale.set(data.language)
</script>

<nav>
    <a href="/{data.language}">home</a>
    <a href="/{data.language}/blog">blog</a>
</nav>

<nav>
    <a data-sveltekit-reload href="/en">{$t("english")}</a>
    <a data-sveltekit-reload href="/de">{$t("german")}</a>
    <a data-sveltekit-reload href="/es">{$t("spanish")}</a>
</nav>

<slot/>


<!--<script>
    import { t, locale, locales } from "./i18n";

    // Create a locale specific timestamp
    $: time = new Date().toLocaleDateString($locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });


</script>

<main>
    <p>
        <select bind:value={$locale}>
            {#each locales as l}
                <option value={l}>{l}</option>
            {/each}
        </select>
    </p>

    <h1>{$t("homepage.title")}!</h1>
    <p>{@html $t("homepage.welcome", { name: "Jane Doe" })}!</p>
    <p>{@html $t("homepage.time", { time })}!</p>
</main>-->

<!--<h1>{$t("init")}</h1>-->
<!--<p id="locale">{$locale}</p>-->