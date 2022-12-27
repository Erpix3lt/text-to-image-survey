<script type="ts">
    import supabase from '$lib/database/db'

    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data)

    let counter = Object.keys(data).length -1;

    async function handleUpVote() {
        let votes = data[counter].up_votes + 1;
        await putUpVotes(data[counter].id, votes).then((data) => {
            console.info(data)
            counter--;
        }).catch((error) => {
            console.error(error)
            counter--;
        });
    }

    async function handleDownVote() {
        let votes = data[counter].down_votes + 1;
        await putDownVotes(data[counter].id, votes).then((data) => {
            console.info(data)
            counter--;
        }).catch((error) => {
            console.error(error)
            counter--;
        });
    }

    async function putUpVotes(id: number, up_votes: number){
        const { data, error } = await supabase
            .from(import.meta.env.VITE_SUPABASE_TABLE_NAME)
            .update({ up_votes})
            .eq('id', id)
        if (error) throw new Error(error.message) 
        return new Response(JSON.stringify({ status: 200, body: data }));
    }

    async function putDownVotes(id: number, down_votes: number){
        const { data, error } = await supabase
            .from(import.meta.env.VITE_SUPABASE_TABLE_NAME)
            .update({ down_votes})
            .eq('id', id)
        if (error) throw new Error(error.message) 
        return new Response(JSON.stringify({ status: 200, body: data }));
    }



</script>

{#if counter >= 0}

    <div class="clothing-data-wrapper flex-collumn rounded">
        <img class="rounded" src="{data[counter].public_url}" alt="generated with a neural network">
        <div class="description-wrapper rounded"><p id="description">{data[counter].description}</p></div>
    </div>

    <div class="button-wrapper">
        <button class="rounded hvr-shrink" on:click={async() =>  {
            handleUpVote();}}><p>👍</p></button>
        <button class="rounded hvr-shrink" on:click={async() =>  {
            handleDownVote();
        }}><p>👎</p></button>
    </div>

{:else}
    <h2 id="thank-you">Thanks for taking the time.</h2>
{/if}

<style>
    h2{
        text-align: center;
        margin: 1em;
    }

    .button-wrapper{
        margin-top: 1em;
    }

    button{
        background-color: rgba(31, 31, 31);
        border: none;
        width: 100px;
        cursor: pointer;
    }

    button p{
        padding: .7em;
        margin: 0;
        font-size: 1.5em;
        text-align: center;
    }
    
    .clothing-data-wrapper{
        padding: .5em;
        background-color: rgb(240, 240, 240);
        max-width: 300px;
    }

    .description-wrapper{
        margin-top: .5em;
        background-color:  #353535;
        padding: 1em;
        max-width: 218px;
        word-wrap: break-word
    }

    .description-wrapper p{
        text-align: center;
        color: rgb(255, 255, 255);
    }
    img{
      max-width: 250px;
    }

    #thank-you{
        color: white;
    }
</style>