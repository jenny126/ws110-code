import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});
books.set("2", {
  id: "2",
  title: "The Old Man", 
  author: "Lee Ear",
});
const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";//碰到跟目錄傳回hello world
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());//傳回所有書
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }//傳回那本書
  });

const app = new Application();
app.use(router.routes());//使用剛剛創立的routes
app.use(router.allowedMethods()); //允許所有http的存取方式

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
