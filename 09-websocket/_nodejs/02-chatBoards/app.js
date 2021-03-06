var Koa = require('Koa')
var app = new Koa()
var fs = require('fs')
const server = require('http').createServer(app.callback())
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

app.use(async function(ctx, next){
  ctx.type = 'html'
  ctx.body = fs.createReadStream(__dirname + '/index.html')
})

io.on('connection', function(socket){
  socket.on('chat', function(o){
    console.log('o=', o)
    io.emit('chat', o)
  })
})

module.exports = server.listen(port, function(){
  console.log('listening on *:' + port)
})


