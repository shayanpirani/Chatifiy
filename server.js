var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


user = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server Running....');

app.get('/' , function(req,res){
    res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection',function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected',connections.length);

    //Disconnect
    socket.on('disconnect',function(data){
        user.splice(user.indexOf(socket.username),1);
        updateUsernames();
        connections.splice(connections.indexOf(socket),1);
        console.log('Disconnected: %s sockets connected',connections.length);
    });

    //send Message
    socket.on('send message' , function(data){
        console.log(data);
        io.sockets.emit('new message',{msg: data , user: socket.username});
    });

    //new server
    socket.on('new user ', function(data,callback){
        console.log("New user %s has joined",data);
        callback(true);
        socket.username = data;
        user.push(socket.username);
        updateUsernames();
    });

    function updateUsernames(){
        io.sockets.emit('get users' ,user);
    }
});