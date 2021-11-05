import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application()

const posts = [
  {id: 0, title: 'aaa', body: 'aaaaa'}, 
  {id: 1, title: 'bbb', body: 'bbbbb'}
]

const router = new Router()

router.get('/list', list)
  .get('/post/:id', show)
  .post('/post', create)

app.use(router.routes())
app.use(router.allowedMethods())

app.use(async (ctx, next) => {
  await next()
  console.log('path=', ctx.request.url.pathname)
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/public/`,
    index: "index.html",
  })
})

async function list (ctx) {
  ctx.response.type = 'application/json'
  ctx.response.body = posts
}

async function show (ctx) {
  const id = ctx.params.id
  const post = posts[id]
  if (!post) ctx.throw(404, 'invalid post id')
  ctx.response.type = 'application/json' //告訴他我傳的是js
  ctx.response.body = post
}

async function create (ctx) {
  // var post = ctx.request.body
  const body = ctx.request.body(); // content type automatically detected
  console.log('body = ', body)
  if (body.type === "json") {
    let post = await body.value; //get
    const id = posts.push(post) - 1
    console.log('create:id=>', id)
    console.log('create:get=>', post)
    post.created_at = new Date()
    post.id = id
    ctx.response.body = post  //收到傳送的東東，存進去   這裡不response也沒關係，但這是為了讓他們覺得有伺服器有塞東西回來//若是這行刪除，不傳success就會傳回404
    console.log('create:save=>', post)
  }
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 })
