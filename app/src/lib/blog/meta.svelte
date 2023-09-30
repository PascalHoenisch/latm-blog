<script>
    export let language;
    export let blog;

</script>

<div class="flex flex-row text-gray-600">
    <div class="text-xs me-3">
<!--        todo format date for country-->
        {blog.date}
    </div>
    <div class="text-xs font-semibold text-gray-600">
        {blog.tag}
    </div>
</div>