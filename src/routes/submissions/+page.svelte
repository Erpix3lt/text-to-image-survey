<script>
  import ClothingCard from '$lib/components/ClothingCard.svelte';


    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data)

</script>

<div class="flex-row">
    {#each Object.values(data) as item}

       <ClothingCard {item}></ClothingCard>

    {/each}
</div>

<style>    
    .flex-row{
        margin-top: 4em;
        width: 70%;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>