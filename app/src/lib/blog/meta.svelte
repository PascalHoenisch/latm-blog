<script>
    export let blog;

    let date = blog.date;

    /**
     * Formats a given date into a string representation.
     *
     * @param {Date} date - The date object to be formatted.
     * @return {string} - The formatted date string in the format 'dd.mm.yyyy'.
     */
    export function formatDate(date){
        var day = String(date.getDate()).padStart(2, '0'); // Get day and add leading zero if necessary (1-9)
        var month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-11 so add 1 to get 1-12), add leading zero if necessary
        var year = date.getFullYear();
        return day + '.' + month + '.' + year;
    }
</script>

<div class="flex flex-row text-gray-600">
    <div class="text-xs me-3">
<!--        todo format date for country specific date format-->
        {formatDate(date)}
    </div>
    {#each blog.tag as tag}
        <div class="text-xs font-semibold text-gray-600 me-2">
            {tag}
        </div>
    {/each}
</div>