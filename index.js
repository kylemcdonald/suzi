var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

var wss = new WebSocketServer({server: server})
wss.on("connection", function(ws) {
  var id = setInterval(function() {
    ws.send("pew", function() { })
  }, 100)
  ws.on("close", function() {
    clearInterval(id)
  })
})
