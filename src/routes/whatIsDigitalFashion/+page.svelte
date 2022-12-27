<script type="ts">
    import Card from "$lib/components/Card.svelte";
</script>

<div>
    <Card ><h3 id="header" slot="header">What is digital fashion?</h3><p slot="text">
        Digital fashion is the approach of moving fashion into the digital space. Famous examples are Balenciaga creating their own game or Fortnite collaborating with Luxury Brands. <br><br> 
        But Digital Fashion goes beyond that. It is not limited by the resources and physics of the analogue world. 
        <br>3D Editors, as well as artificial intelligence might be used to create digital fashion.
        </p><a slot="link" href="/create/howTo">➜</a>
    </Card>
</div>

<style>
#header{
    margin: .5em;
}
a{
    text-decoration: none;
    color: #212121;
    cursor: pointer;
    font-weight: 700;
    padding: .5em;
}

</style>
