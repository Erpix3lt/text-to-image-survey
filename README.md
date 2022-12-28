# text-to-image-survey
**Create your own remote workshop, using OpenAi's Dall E as part of a generative toolset.**
Running example: https://whataboutdigitalfashion.vercel.app

## Techstack
This template is using **svelte kit** for the web infrastructure. Intro cards, providing insight into the topic your survey is about, are based on **json** input. The site relies on a **supabase** database, here survey results, as well as the images created will be saved. Every new entry will be automatically posted by a preconfigured bot in a **telegram** group. The site also relies on **open ai**'s api, in order to use **Dall e**.

## Getting started
### Basic setup:
In order to get this template working, you must create a supabase database, aswell as storage option. A telegram group chat, using a bot is also needed. Here all the entries will be posted. You must also provide an openai api key, in order to interact with Dall E. 
This is the default example of the **.env** file:
```` env
VITE_TELEGRAM_BOT_TOKEN=<Bot-token>
VITE_TELEGRAM_CHAT_ID=<Chat-id>
VITE_SUPABASE_URL=<Supabase-URL>
VITE_SUPABASE_ANON_KEY=<Supabase-anon-key>
VITE_SUPABASE_TABLE_NAME=<Supabase-table-name>
VITE_OPENAI_KEY=<OpenAI-key>
````
### Configuring intro cards:
In order to setup your own remote workshop ``src/lib/intro/intro.json`` must be configured to your liking. Each new array element creates a new card, providing the participants with information of the domain, eventually going deeper into the topic. <br>
**A good survey calls for enough information, without nudging participants into a direction.** <br>
### Updating information:
You can configure the title of the survey, insert your name and also provide a telegran chat link. 
Edit the .env file to your liking: <br>
```` env 
VITE_TITLE=MYSURVEY
VITE_AUTHOR=Max Mustermann
VITE_TELEGRAM_LINK=https://someLink.de
````



