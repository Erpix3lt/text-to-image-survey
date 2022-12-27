<script type="ts">
  import { post } from "$lib/services/TelegramService";

  let firstView = "block";
  let secondView = "none";
  let success = "none";

  const message = { author: "", description: "" };

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
    secondView = "block";
  }

  function showSuccess() {
    firstView = "none";
    secondView = "none";
    success = "block";
  }

  async function handleSubmit() {
    const response = await post(message);
    console.log(response);
    if (response.status == 200) {
      showSuccess();
    }
  }
</script>

<div style="display: {firstView};">
  <div class="form rounded">
    <input  bind:value={message.description} placeholder="Describe your garment here."/>
    <button on:click={handleLetsGo} class="dark rounded hvr-shrink">➜</button>
  </div>
</div>

<div style="display: {secondView};">
    <div class="form rounded">
        <input  bind:value={message.author} placeholder="Enter your nickname"/>
        <button on:click={handleSubmit} class="dark rounded submit hvr-shrink">Submit</button>
    </div>
</div>

<div class="success rounded" style="display: {success};">
  <p>
    Thank you {message.author}. You will be notified if your sketch is ready.
  </p>
</div>

<style>
  .form {
    display: flex;
    flex-direction: row;
    border: solid;
    color: white;
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

  button {
    /* Just a little styling to make it pretty */
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

  .success{
    border: solid;
    color: white;
  }

  .success p {
    padding: .5em;
    text-align: center;
    color: #d9d9d9;
    font-size: 1em;
  }
</style>
