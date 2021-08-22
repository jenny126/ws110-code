import { app } from './myoak.js'

app.use(function (ctx) {
  ctx.body = `<html><body>
    <a href="https://tw.youtube.com">YouTube</a>
    </body></html>`
})

app.listen(8000)
