<script>
    import {t, locale} from "./i18n.js";
    import "$css/app.css";
    import {fade, fly} from 'svelte/transition';

    export let data;
    locale.set(data.language);

    let menuStatus = false;

    function clickMobileMenu() {
        menuStatus = !menuStatus
    }

</script>

<div class="p-3 sm:p-3" id="header">
    <div class="rounded-xl flex flex-row">
        <div class="text-start grow">
            <h1>Latm-Blog</h1>
            <h2>Subtitle</h2>
        </div>
        <div class="flex-none">
            <button id="mobile-menu-button" on:click={clickMobileMenu}>
                {#if menuStatus}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    {:else if !menuStatus}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                    </svg>
                {/if}
            </button>
        </div>
    </div>
    {#if menuStatus}
        <div in:fly={{ y:0, duration: 400 }} out:fade={{ y:200, duration: 100 }} id="mobile-nav-bar"
             class="z-50 flex flex-col mt-5">
            <div class="flex-none">
                <nav>
                    <a href="/{data.language}" on:click={clickMobileMenu} >home</a>
                    <a href="/{data.language}/blog" on:click={clickMobileMenu}>blog</a>
                </nav>
            </div>
            <div class="flex-none">
                <nav>
                    <a data-sveltekit-reload href="/en">{$t("english")}</a>
                    <a data-sveltekit-reload href="/de">{$t("german")}</a>
                    <a data-sveltekit-reload href="/es">{$t("spanish")}</a>
                </nav>
            </div>
        </div>
    {/if}
</div>

{#if !menuStatus}
    <div class="container m-3" id="body" in:fly={{ y:400, duration: 500 }} out:fly={{ y:400, duration: 400 }}>
        <slot/>
    </div>

    <div class="footer">

    </div>
{/if}

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