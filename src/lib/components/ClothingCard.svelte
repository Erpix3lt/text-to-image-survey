<script>
    export let item;
    let activeDescription = false;

    let imageDisplay = 'block';
    let descriptionDisplay = 'none';

    function toggleDescription(){
        activeDescription = !activeDescription;
        if(activeDescription){
            imageDisplay = 'none';
            descriptionDisplay = 'block'
        } else{
            imageDisplay = 'block';
            descriptionDisplay = 'none'
        }
    }
</script>

<div class="clothing-data-wrapper flex-row rounded" on:mouseenter={toggleDescription} on:mouseleave={toggleDescription}>
    <img class="rounded" style="display: {imageDisplay};" src="{item.public_url}" alt="generated with a neural network">
    <div class="description-wrapper rounded" style="display: {descriptionDisplay};"><p id="description">{item.description}</p></div>
</div>

<style>
    .clothing-data-wrapper{
        background-color: rgba(240, 240, 240, 0);
        max-width: 250px;
        margin: 1em;
        height: 250px;
        align-items: center;
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
</style>

