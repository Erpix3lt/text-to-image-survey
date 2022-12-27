<script type="ts">
  import Card from "$lib/components/Card.svelte";
</script>

<div>
  <Card>
    <h3 id="header" slot="header">How To</h3>
    <p slot="text">
      For my bachelor thesis I am asking you, to create a <b>Digital clothing item</b>. Something you would want to be existing.<br /> In order to do so, we are using DALL E, a neural network
      translating text into images. On the next slide you can see some examples of text being translated into Digital Art.<br />
      I am not showing you Digital Clothes on purpose, hoping not to influence your creativity.
    </p>
    <a  slot="link" href="/create/examples"
      >Lets see some examples ➜</a
    ></Card
  >
</div>

<style>
  #header {
    margin: 0.5em;
  }
  a {
    text-decoration: none;
    color: #212121;
    cursor: pointer;
    font-weight: 700;
    padding: .5em;
  }
</style>
