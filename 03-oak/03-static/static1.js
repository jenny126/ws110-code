import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (ctx) => {//ctx:伺服器跟瀏覽器溝通後包裝過的物件 //async:因為他是非同步的函數，用send印為他有讀檔案，所以要加這個
  console.log('path=', ctx.request.url.pathname)
  await send(ctx, ctx.request.url.pathname, { //使用SEND函數什麼檔案格式都可以支援(雖然我的圖片好像跑不出來)
    // root: `${Deno.cwd()}/public/`,
    root: Deno.cwd()+'/public/', //Deno.cwd():取得目前的資料夾 //此行目的為設定其根目錄
    index: "index.html", //如果只有打路徑沒有打後面的html，他還是會自己去到index.html
  });
});

console.log('start at : http://127.0.0.1:8000')
console.log('cwd=', Deno.cwd())
await app.listen({ port: 8000 });
