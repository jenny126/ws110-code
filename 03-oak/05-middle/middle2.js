import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// Logger 記錄過了幾毫秒
  app.use(async (ctx, next) => { //裡面有await，外面就要有async
  await next(); //讓下一個中間鍵可以執行
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing 把經過的時間記錄下來，回應再x-response-time裡面
app.use(async (ctx, next) => {
  const start = Date.now();//印出請求什麼時候被執行  1970-1-1到現在過了幾毫秒
  console.log('start=', start)
  await next();
  const stop = Date.now();
  console.log('stop=', stop)
  const ms = stop - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Hello World!
app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
