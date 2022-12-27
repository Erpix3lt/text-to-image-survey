/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
  let data = await request.json()
  const Token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  const url = `https://api.telegram.org/bot${Token}/sendPhoto?chat_id=${chatId}&photo=${data.imageUrl}&parse_mode=MarkdownV2&caption=*Author:*${data.author}%0A*Description:*${data.description}`
  let response = await fetch(url);
  if(response.ok){
    return new Response(JSON.stringify({ status: 200, body: response }));
  } else {
    return new Response(JSON.stringify({ status: 501, body: response }));
  }
}


