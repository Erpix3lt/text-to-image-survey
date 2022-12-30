<script type="ts">
    import { post } from "$lib/services/TelegramService";
    import { Confetti } from "svelte-confetti"
    import { OpenAIApi } from "openai";
    import configuration from "$lib/openAi/OpenAi";
    import supabase from '$lib/database/db'
    import { decode } from 'base64-arraybuffer'

    let firstView = "flex";
    let secondView = "none";
    let workingOnItView = "none";
    let successView = "none";
    let voteEntriesView = "none"
    let errorView = "none";
    let isConfetti = false;
    
    let fileName : string = '';
  
    const message = { author: '', description: '', imageUrl: ''};
  
    function handleLetsGo() {
      if (
        typeof message.description === "string" &&
        message.description.length === 0
      ) {
        console.log("please enter some text");
      } else {
        toggleNextView();
      }
    }
  
    function toggleNextView() {
      firstView = "none";
      secondView = "flex";
    }
  
    function showWorkingOnIt() {
      firstView = "none";
      secondView = "none";
      workingOnItView = "block";
      voteEntriesView = "none"
      isConfetti = true;
    }

    function showSuccess(){
      firstView = "none";
      secondView = "none";
      workingOnItView = "none";
      successView = "block"
      voteEntriesView = "flex"
    }

    function showError() {
      firstView = "none";
      secondView = "none";
      workingOnItView = "none";
      successView = "none"
      voteEntriesView = "none"
      errorView = "block";
    }

    async function createImage(prompt: string) {
        const openai = new OpenAIApi(configuration);
        return await openai.createImage({
        prompt,
        n: 1,
        size: "512x512",
        response_format: 'b64_json'
        }).then((data) => {
            return data;
        }).catch((error) => {
            throw new Error("error during image creation" +error);
        })
    }

    async function insertSubmissionIntoTable(public_url: string, description: string) {
        const { error } = await supabase
            .from(import.meta.env.VITE_SUPABASE_TABLE_NAME)
            .insert({description, public_url})
        if (error) throw new Error("error during table insert" +error.message);
    }

    async function uploadBase64ToBucket(base64String: string, fileName: string) {
        const { data, error } = await supabase
        .storage
        .from('digital-clothing')
        .upload(fileName, decode(base64String), {
            contentType: 'image/png'
        })
        if (error) throw new Error("error during upload to bucket" + error.message)
        return data;
    }

    async function getPublicUrlFromBucket(fileName: string) {
      const { data } = supabase
      .storage
      .from('digital-clothing')
      .getPublicUrl(fileName)
      return data.publicUrl;
    }
  
    async function handleSubmit() {
      fileName = message.description.replaceAll(' ', '');
      showWorkingOnIt();

      try {
        const openAiResponse = await createImage(message.description);
        const supabaseBucketRespone = await uploadBase64ToBucket(openAiResponse.data.data[0].b64_json, fileName);
        message.imageUrl = await getPublicUrlFromBucket(fileName)
        const supabaseTableResponse = await insertSubmissionIntoTable(message.imageUrl, message.description);
        const response = await post(message);

        showSuccess()
      } catch (error) {
        console.log(error)
        showError();
      }
    }
  </script>
    <img class="rounded" id="robots" src="../robots/{Math.floor(Math.random() * 6) + 1}.png" alt="" style="display: {workingOnItView};">
    <img src="{message.imageUrl}" class="rounded" id="robots" alt="dalle e" style="display: {successView};">
    <div class="input-card rounded">
        <div class="text-wrapper rounded flex-row" style="display: {firstView};">
            <p id="emoji">🐣</p>
            <p>Please create your own artifact now. 
                A very precise description is helpfull.
            </p>
        </div>
    
        <div style="display: {firstView};">
            <div class="form rounded">
            <input  bind:value={message.description} placeholder="Describe your garment here."/>
            <button id="standard-button" on:click={handleLetsGo} class="dark rounded hvr-shrink">➜</button>
            </div>
        </div>
        
        <div class="text-wrapper rounded flex-row" style="display: {secondView};">
          <p id="emoji">👤</p>
          <p>Please enter your nickname now. Your description and name might be visible in the telegram chat afterwards.
          </p>
        </div>

        <div style="display: {secondView};">
            <div class="form rounded">
                <input  bind:value={message.author} placeholder="Enter your nickname"/>
                <button id="standard-button" on:click={handleSubmit} class="dark rounded submit hvr-shrink">Submit</button>
            </div>
        </div>

        <div class=" rounded thank-you-wrapper flex-column" style="display: {workingOnItView};">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <p>
            Thank you {message.author}. Your sketch should be ready anytime soon.
            </p>
        </div>

        <div class="rounded thank-you-wrapper flex-column" style="display: {errorView};">
          <p>Somehow an error occurred.</p>
          <button id="idea-button" class="try-again rounded hvr-shrink" ><a href="javascript:window.location.href=window.location.href">Try again.</a></button>
        </div>

        <div class=" rounded thank-you-wrapper flex-column" id="message-description" style="display: {successView};">
          <p >
            {message.description}
          </p>
        </div>

        <div class="confetti-wrapper">
            {#if isConfetti}
                <Confetti></Confetti>
            {/if}
        </div>

        <div class="button-wrapper flex-row" style="display: {voteEntriesView};">
            <button id="idea-button" class="rounded hvr-shrink" ><a href="javascript:window.location.href=window.location.href">I have another idea</a></button>
            <button id="standard-button" class="rounded hvr-shrink" ><a href="/submissions/vote">vote entries</a></button>
        </div>
    </div>    

<style>
  .try-again{
    margin-bottom: 1.1em !important;
  }

    #message-description{
      margin-bottom: 1em;
    }

    #robots{
      max-width: 280px;
      height: auto;
      align-self: center;
      margin: 2em;
    }

    .confetti-wrapper{
        align-self: center;
    }

    .button-wrapper{
        width: 100%;
        justify-content: center;
    }

    .text-wrapper{
        justify-content: space-between;
        background-color: #5a5a5a;
        margin-bottom: 1em;
    }

    .thank-you-wrapper{
        align-items: center;
        background-color: #5a5a5a;
        text-align: center;
    }

    .input-card{
        background-color: #353535;
        max-width: 350px;
        padding: 1em;
        display: flex;
        flex-direction: column;
    }

    #emoji{
        font-size: 2em;
        margin: 0;
    }

    p{
        color: rgb(197, 197, 197);
        padding: 0 1em 0 1em;
    }

    @media screen and (max-width:400px) {
        .input-card{
            max-width: 300px;
        }
    }

    .form {
    display: flex;
    flex-direction: row;
    border: solid;
    color: white;
    width: 100%;
  }

  input {
    flex-grow: 2;
    border: none;
    background-color: rgba(178, 34, 34, 0) !important;
    width: 150px;
    color: white;
    padding-left: 1em;
  }

  input:focus {
    /* removing the input focus blue box. Put this on the form if you like. */
    outline: none;
  }


  #idea-button{
    border: solid;
    border-color: white;
    background-color: #5a5a5a00;
    margin: .5em;
    padding: 1em;
  }

  #idea-button a{
    color: white;
  }

  #standard-button{
    border: none;
    background: rgb(238, 238, 238);
    color: rgb(27, 27, 27);
    margin: .5em;
    padding: 1em;
  }

  input::placeholder {
    color: #939393;
  }

  *:focus {
    outline: none;
  }

  a{
    text-decoration: none;
    color: #353535;
  }

  .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>