<script>
    import {t, locale} from "$lib/lang/i18n.js";
    import "$css/app.css";
    import {fade, fly} from 'svelte/transition';
    import * as domain from "domain";

    export let data;
    locale.set(data.language);

    let menuStatus = false;
    let languageStatus = false;

    function clickMobileMenu() {
        menuStatus = !menuStatus
    }

    function changeLanguageStatus() {
        languageStatus = !languageStatus
    }

    function closeLanguageSelection() {
        languageStatus = false
    }

    /** @type {import('svelte/action').Action}  */
    function setRouteActive(node) {
        if (node.href === window.location.href) {
            node.classList.add("underline", "underline-offset-4")
        }

        return {};
    }

</script>

<svelte:head>
    <link rel="alternate" type="application/rss+xml"
          title="RSS" href="https://{data.domain}/api/feed.rss" />
</svelte:head>

<div class="md:flex md:flex-row">
    <div class="md:basis-1/8 lg:basis-1/5"></div>
    <div class="md:basis-6/8 lg:basis-3/5">
        <div class="flex flex-col h-screen ">
            <div class="p-3 sm:p-3" id="header">
                <div class="rounded-xl flex flex-row">
                    <div class="text-start grow">
                        <a href="/{data.language}">
                            <h1>Latm-Blog</h1>
                            <h2>{$t("homepage.subtitle")}</h2>
                        </a>
                    </div>
                    <!-- mobile menu -->
                    <div class="flex-none md:hidden">
                        <button id="mobile-menu-button" on:click={clickMobileMenu}>
                            {#if menuStatus}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            {:else if !menuStatus}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                                </svg>
                            {/if}
                        </button>
                    </div>
                    <!-- desktop menu -->
                    <div class="hidden md:block md:flex md:flex-row my-3">
                        <div class="ms-4">
                            <a href="/{data.language}" use:setRouteActive>home</a>
                        </div>
                        <div class="ms-4">
                            <a href="/{data.language}/about"
                               use:setRouteActive>{$t("About")}</a>
                        </div>
                        <div class="ms-4 relativ">
                            <div class="text-gray-600"
                                 on:keypress={changeLanguageStatus}
                                 on:click={changeLanguageStatus}
                                 role="button"
                                 tabindex="0"
                            >
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5"
                                         stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"/>
                                    </svg>
                                </div>
                                {#if languageStatus}
                                    <div class="flex-none absolute top left"
                                         id="language-selection-desktop"
                                    >
                                        <div class="flex flex-col p-3 bg-gray-200 overflow-visible"
                                             in:fly={{ y:0, duration: 400 }} out:fade={{ y:200, duration: 100 }}
                                        >
                                            <div>
                                                <a data-sveltekit-reload href="/en">english</a>
                                            </div>
                                            <div>
                                                <a data-sveltekit-reload href="/de">german</a>
                                            </div>
                                            <div>
                                                <a data-sveltekit-reload href="/es">spanish</a>
                                            </div>
                                        </div>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>
                {#if menuStatus}
                    <div in:fly={{ y:0, duration: 400 }}
                         out:fade={{ y:200, duration: 100 }}
                         id="mobile-nav-bar"
                         class="z-50 flex flex-col mt-5 text-lg ms-3">
                        <div class="my-1">
                            <a href="/{data.language}" on:click={clickMobileMenu} use:setRouteActive>home</a>
                        </div>
                        <div class="my-1">
                            <a href="/{data.language}/about" on:click={clickMobileMenu}
                               use:setRouteActive>{$t("About")}</a>
                        </div>

                        <div class="my-1">
                            <div class="flex flex-row" on:keypress={changeLanguageStatus}
                                 on:click={changeLanguageStatus} role="button" tabindex="0">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5"
                                         stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"/>
                                    </svg>
                                </div>
                            </div>

                            {#if languageStatus}
                                <div class="flex flex-col ms-3">
                                    <div>
                                        <a data-sveltekit-reload href="/en">english</a>
                                    </div>
                                    <div>
                                        <a data-sveltekit-reload href="/de">german</a>
                                    </div>
                                    <div>
                                        <a data-sveltekit-reload href="/es">spanish</a>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    </div>
                {/if}
            </div>

            {#if !menuStatus}
                <!-- content -->
                <div class="container px-3 flex-grow" id="body" in:fly={{ y:400, duration: 500 }}
                     out:fly={{ y:400, duration: 400 }}>
                    <slot/>
                </div>

                <!-- footer -->
                <div class="footer">
                    <div class="pt-2 px-2 pb-2 grid grid-cols-2 gap-4">
                        <div class="text-end">
                            <a href="/{data.language}/imprint">{@html $t("Imprint")}</a>
                        </div>
                        <div class="text-start">
                            <a href="/{data.language}/privacy">{@html $t("Privacy")}</a>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
    <div class="md:basis-1/8 lg:basis-1/5"></div>
</div>


