import { serve } from "https://deno.land/std@0.60.0/http/server.ts";  //取出網址中的sever函數
const s = serve({ port: 8000 }); 
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
} //對每一個請求都回傳hello world
