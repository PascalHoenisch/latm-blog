<script>
    export let language;
    export let blog;

</script>

<div class="flex flex-row text-gray-600">
    <div class="text-xs me-3">
<!--        todo format date for country-->
        {blog.date}
    </div>
    {#each blog.tag as tag}
        <div class="text-xs font-semibold text-gray-600 me-2">
            {tag}
        </div>
    {/each}
</div>