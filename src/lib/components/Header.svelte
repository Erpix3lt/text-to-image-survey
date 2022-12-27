<script>
    let fullLogoDisplay = "none";
    let navDisplay = 'block'

    function showFullLogo(){
        fullLogoDisplay = "block"
        navDisplay = 'none'

    }

    function hideFullLogo(){
        fullLogoDisplay = "none";
        navDisplay = 'block'
    }
</script>

<div class="flex-column">
    <a href="/"><h2 on:mouseenter={showFullLogo} on:mouseleave={hideFullLogo}>WADF?</h2></a>
    <div style="display: {fullLogoDisplay};" class="full-logo rounded"><p>what about digital fashion?</p></div>
    <nav style="display: {navDisplay};">
        <a href="/">intro</a>
        <a href="/submissions">gallery</a>
        <a href="/create">create</a>
        <a href="/submissions/vote">vote</a>
    </nav>
</div>


<style>
    nav{
        margin-top: 2em;
        font-family: 'PT Mono', 'monospace';
        font-size: .8em;
        font-weight: 300;
        
    }

    nav a{
        color: #c6c6c6;
        text-decoration: none;
        cursor: pointer;
    }

    .flex-column{
        align-items: center;
        margin: 1.5em;
    }

    h2{
        color: white;
        margin: 0;
    }

    p{
        text-align: center;
        color: rgb(226, 226, 226);
        font-family: 'PT Mono', 'monospace';
        font-size: .8em;
        font-weight: 300;
    }

</style>