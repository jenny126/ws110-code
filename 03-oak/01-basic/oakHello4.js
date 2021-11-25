import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

var count = 0;
function hello(ctx) {
  console.log(++count, "times hello executed!");//++count是計算第幾次訪問
  console.log('href=', ctx.request.url.href)//此行為取得完整的網址
  ctx.response.body = "Hello World!";
}

app.use(hello);

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
