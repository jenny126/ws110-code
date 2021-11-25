import { serve } from "https://deno.land/std@0.60.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  console.log('================================')
  console.log('req.headers=', req.headers) // 注意：Headers 是個 Map，不能直接用 JSON.stringify
  console.log('req=', req)
  req.respond({
    body: `
    method=${req.method}
    url=${req.url}
    proto=${req.proto}
    headers=${JSON.stringify(Object.fromEntries(req.headers), null, 2)}
    `});
    // req.method 取得方法  [GET](https://notfalse.net/43/http-request-method#-standardized-method)
    // req.url 取得網址 >>http://localhost:8000/ 但其實改變網頁框的網址也會導致這裡的部份的輸出結果改變
    // req.proto 取得協定(ex HTTP) >>HTTP
    //req.headers 印出表頭

}
