<script>
    import {t} from "../i18n.js";

    export let data;
</script>

<h1>blog</h1>
<h2>{$t('homepage.blog.description')}</h2>

<ul>
    {#each data.summaries as { slug, title }}
        <li><a href="/blog/{slug}">{title}</a></li>
    {/each}
</ul>
