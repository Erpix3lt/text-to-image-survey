<script type="ts">
  import Card from "$lib/components/Card.svelte";
  import  intro  from '$lib/intro/intro.json';

  let counter: number = 0;
  let lastCard: boolean = false;

  function iterateUntilArrayEnd() {
    if  (counter == intro.length - 2) {
      lastCard = true;
    }
    if (counter < intro.length - 1) {
      counter++;
    } else {
      console.log("End of array");
    }
  }

</script>
    <div>
        <Card>
          <h3 id="header" slot="header">{intro[counter].header}</h3>
          <p slot="text">{intro[counter].text}</p>
        </Card>
        {#if lastCard}
          <button class="action rounded hvr-shrink"><a href="/create/examples">next slide</a></button>
        {/if}
        {#if !lastCard}
          <button  on:click={iterateUntilArrayEnd} class="action rounded hvr-shrink">next slide</button>
        {/if}

    </div>

<style>
  a{
    color: black;
  }

  #header{
    margin: .5;
  }
  
  .action{
    height: 40px;
    border: none;
    padding: .5em;
    background-color: #849FFF;
    margin-top: .5em;
  }
</style>
