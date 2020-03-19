require('dotenv').config();
require('./db');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const messageRoute = require('./routes/message.route');

app.use(express.json());
app.use('/messages', messageRoute);

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

io.on('connection', socket => {
   console.log('New connection');
   socket.emit('BEConnection', 'Hola, bienvenido al Chat - Socket.io');

   socket.on('FEConnection', data => {
      console.log(data);
   });

   socket.on('message', data => {
      io.emit('message', data);
   });

   socket.on('disconnect', () => {
      console.log('Disconnected');
   });
});

http.listen(process.env.PORT, () => {
   console.log(`Server started on port http://localhost:${process.env.PORT}`);
});
