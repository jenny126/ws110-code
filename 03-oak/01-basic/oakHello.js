import { Application } from "https://deno.land/x/oak/mod.ts";//取出oak模組的Application物件

const app = new Application();

app.use((ctx) => {//app.use>此函數被掛進去，直接use代表不管怎麼樣都會進去函數
  ctx.response.body = "Hello World!";
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });


