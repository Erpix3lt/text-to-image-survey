
<div class="flex-column">
    {#if import.meta.env.VITE_TELEGRAM_LINK != undefined}
        <a id="telegram" href="{import.meta.env.VITE_TELEGRAM_LINK}">Join the telegram chat, to see new entries.</a>
    {/if}
    <p>@{import.meta.env.VITE_AUTHOR}</p>
</div>


<style>
    
    .flex-column{
        margin: 2em;
    }
    #telegram{
        text-decoration: none;
        color: rgb(145, 145, 255);
        text-align: center;
    }
    p{
        color: rgb(107, 107, 107);
        font-size: .8em;
        text-align: center;
    }
</style>