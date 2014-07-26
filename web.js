var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('log', { hello: 'connected' });
});

function sendTime() {
    io.sockets.emit('time', { time: new Date().toJSON() });
}

setInterval(sendTime, 100);
