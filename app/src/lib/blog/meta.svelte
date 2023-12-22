<script>
    export let blog;

    let date = blog.date;

    export function formatDate(dateStr, locale='Your-Locale-Here'){
    }
</script>

<div class="flex flex-row text-gray-600">
    <div class="text-xs me-3">
<!--        todo format date for country specific date format-->
        {date}
    </div>
    {#each blog.tag as tag}
        <div class="text-xs font-semibold text-gray-600 me-2">
            {tag}
        </div>
    {/each}
</div>