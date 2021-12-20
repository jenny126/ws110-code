import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'//* as 引入全部並給他一個名子

const posts = [
  {id:0, title:'aaa', body:'aaaaa'},
  {id:1, title:'bbb', body:'bbbbb'}
];

const router = new Router();

router.get('/', list)
  .get('/post/new', add) //post new 觸發 add 
  .get('/post/:id', show) // post:id 觸發show (顯示)
  .post('/post', create); //按下create按鈕觸發

router.get('/json', (ctx) => {
    ctx.response.body = posts
  })

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function list(ctx) {
  ctx.response.body = await render.list(posts);
}

async function add(ctx) {
  ctx.response.body = await render.newPost();
}

async function show(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'invalid post id'); //彈出無法顯示
  ctx.response.body = await render.show(post);
}

async function create(ctx) {
  const body = ctx.request.body()
  if (body.type === "form") {//檢查是不是用form的方式送出的
    const pairs = await body.value
    const post = {}
    for (const [key, value] of pairs) {//第一個key會是title，key就是指name，vaule是代表你填入的值
      post[key] = value
    }
    console.log('post=', post)
    const id = posts.push(post) - 1;
    post.created_at = new Date();
    post.id = id;
    ctx.response.redirect('/'); //redirect:指向另外一個網頁
  }
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
