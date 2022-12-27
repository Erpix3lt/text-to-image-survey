<div class="help-wrapper rounded">
    <div class="header">
        <div id="header-point"></div>
        <div id="header-text">
            <slot name="header"></slot>
        </div>
    </div>
    <div class="help-text">
        <slot  name="text"></slot>
    </div>
    <button class="align-self-right action rounded hvr-shrink"><slot name="link"></slot></button> 
</div>

<style>
    .action{
        height: 40px;
        border: none;
        padding: .5em;
        background-color: #849FFF;
        margin-top: .5em;
    }

    .align-self-right{
        align-self: end;
    }
    
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #header-point{
        background-color: #849FFF;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        margin-right: 1em;
    }

    #header-text{
        color: white;
    }

    .help-wrapper{
        background-color: #353535;
        max-width: 350px;
        padding: 1em;
        display: flex;
        flex-direction: column;
    }

    .help-text{
        color: rgb(226, 226, 226);
        font-family: 'PT Mono', 'monospace';
        font-size: .8em;
        font-weight: 300;
    }

    @media screen and (max-width:400px) {
        .help-wrapper{
            max-width: 300px;
        }
    }

</style>
