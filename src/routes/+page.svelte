<script type="ts">
  import Card from "$lib/components/Card.svelte";

  let inputView = 'none'
  let helpView = 'block'

  function handleClick(){
    toggleCards()
  }

  function toggleCards(){
    inputView = 'block';
    helpView = 'none';
  }

</script>
    <div>
      <Card><h3 id="header" slot="header">Intro</h3><p slot="text">
        This website is part of my bachelor thesis “What about digital fashion”, in which I want to explore the look of future digital fashion artefacts, in a participatory way! <br><br>
        You are now invited to take part in a survey, creating digital clothing items on your own. After that you can also rate the creative artefacts of other people. <br><br>
        Please try to stay true to yourself and be creative. Thanks for taking the time!  
    </p><a slot="link" href="/whatIsDigitalFashion">Let's have a look ➜</a></Card>
    </div>

<style>
  #header{
    margin: .5;
  }
  a{
    text-decoration: none;
    color: #212121;
    cursor: pointer;
    font-weight: 700;
    padding: .5em;
  }

</style>
