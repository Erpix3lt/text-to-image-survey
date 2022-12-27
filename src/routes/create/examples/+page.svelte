<script>
    import viewport from '$lib/helperFunctions/viewportAction';

    let scrollIndicator = 'flex'
    let linkButton = 'none'

    function toggleContent(){
        scrollIndicator = 'none';
        linkButton = 'block'
    }
</script>

<div class="example-wrapper">
    <div class="card-wrapper">
        <div class="card">
            <img src="https://cdn.openai.com/labs/images/3D%20render%20of%20a%20cute%20tropical%20fish%20in%20an%20aquarium%20on%20a%20dark%20blue%20background,%20digital%20art.webp?v=1" alt="first example">
            <div class="text-box">
                <p>3D render of a cute tropical fish in an aquarium on a dark blue background, digital art</p>
            </div>
        </div>
        <div class="card" use:viewport
		on:enterViewport={() => toggleContent()}>
            <img src="https://cdn.openai.com/labs/images/An%20oil%20pastel%20drawing%20of%20an%20annoyed%20cat%20in%20a%20spaceship.webp?v=1" alt="first example">
            <div class="text-box">
                <p>An oil pastel drawing of an annoyed cat in a spaceship</p>
            </div>
        </div>
        <div class="card">
            <img src="https://cdn.openai.com/labs/images/A%20futuristic%20neon%20lit%20cyborg%20face.webp?v=1" alt="first example">
            <div class="text-box">
                <p>A futuristic neon lit cyborg face.</p>
            </div>
        </div>
        <div class="card">
            <img src="https://cdn.openai.com/labs/images/A%20computer%20from%20the%2090s%20in%20the%20style%20of%20vaporwave.webp?v=1" alt="first example">
            <div class="text-box">
                <p>A computer from the 90s in the style of vaporwave</p>
            </div>
        </div>
        <div class="card">
            <img src="https://cdn.openai.com/labs/images/An%20Andy%20Warhol%20style%20painting%20of%20a%20french%20bulldog%20wearing%20sunglasses.webp?v=1" alt="first example">
            <div class="text-box">
                <p>An Andy Warhol style painting of a french bulldog wearing sunglasses</p>
            </div>
        </div>
    </div>
    <div id="scroll-indicator" style="display: {scrollIndicator}" class="rounded">
        <p class="wave" id="scroll-hand">👆</p>
        <p>Scroll right</p>
    </div>
    <button id="link-button" style="display: {linkButton}">
        <a href="/create">alright, lets go ➜</a>
    </button>    
</div>
<style>
    #scroll-indicator{
        align-self: center;
        background-color: rgb(42, 42, 42);
        display: none;
        flex-direction: row;
        align-items: center;
        padding: 1em;
    }

    #scroll-hand{
        padding-right: 1em;
    }

    #scroll-indicator p {
        color: white;
        font-weight: 700;
        margin: 0;
    }

    ::-webkit-scrollbar{
        height: 4px;
        width: 4px;
        background: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb:horizontal{
        background: rgb(94, 172, 255);
        border-radius: 10px;
    }

    #link-button{
        display: none;
        align-self: flex-end;
        border-radius: 10px;
        border-style: solid;
        border-color: rgb(255, 255, 255);
        height: 40px;
        background-color: rgba(102, 83, 83, 0);
    }

    a{   
        padding: .5em;
        text-decoration: none;
        color: #f3f3f3;
        cursor: pointer;
        font-weight: 700;
    }
    
    .example-wrapper{
        display: flex;
        flex-direction: column;
    }
    .card-wrapper{
        display: flex;
        flex-direction: row;
        width: 800px;
        overflow-x: scroll;
        margin-bottom: 1em;
        -webkit-overflow-scrolling: auto;
    }


    .card{
        margin: 1.5em;
        max-width: 250px;
        border-radius: 15px;
        background-color: white;
        padding-bottom: 1em;
    }
    img{
        width: 250px;
        height: auto;
        border-radius: 15px 15px 0px 0px;
    }

    .text-box{
        margin: 1em;
        text-align: center;
        color: rgb(82, 82, 82);
    }

    @media screen and (max-width:400px) {
        .card-wrapper{
            max-width: 300px;
        }

        #scroll-indicator{
            display: flex;
        }

        #link-button{
            align-self: center;
        }
    }
</style>