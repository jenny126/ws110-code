import { serve } from "https://deno.land/std@0.60.0/http/server.ts";  //取出網址中的sever函數
const s = serve({ port: 8000 }); //設定port是8000，因此會打開8000port當伺服器
console.log("http://localhost:8000/");
for await (const req of s) {  //s是一個可列舉的東西，他會一直傳會請求
  req.respond({ body: "Hello World\n" });
} //對每一個請求都回傳hello world