<script>
    import './styles/global.css';
    import Header from "$lib/components/Header.svelte";
    import { randomHSL } from "$lib/helperFunctions/RandomPastell"; 
  import Footer from '$lib/components/Footer.svelte';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
/>
<meta name="theme-color" content="#212121" />


<div class="global-wrapper">
    <Header></Header>
    <div class="content-wrapper">
        
        <slot></slot>
        
    </div>
    <Footer></Footer>
</div>

<style>
    .global-wrapper{
        background: rgb(33,33,33);
        background: linear-gradient(45deg, rgba(33,33,33,1) 0%, rgba(19,19,19,1) 50%, rgb(16, 16, 16) 100%);
        margin: 0;
        min-height: 100vh;
        width: 100vw;
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .content-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>