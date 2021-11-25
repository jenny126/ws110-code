import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.type = 'text/plain' //如果發現是一般文字，就直接來回應
  // ctx.response.type = 'text/html' //自動辨識如果type是html就會設定為text/html
  //也可以強制設定格式
  ctx.response.body = `
<html>
  <body>
    <a href="https://tw.youtube.com">YouTube</a>
  </body>
</html>`
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
