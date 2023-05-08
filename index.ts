import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import AppDataSource from './src/data-source';
import router from './src/routers/index';

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
  cors: {
    origin: '*',
  }});


AppDataSource.initialize().then(()=>{
    console.log('con nếch súc sét !')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('',router);

io.on('connection', (socket) => {
  console.log('có đứa vô : '+ socket.id);
  io.on('client-chat',(data)=>{
    console.log('Client id : '+socket.id + "send :" + data )
  })

  socket.on('disconnect', () => {
    console.log('có đứa đi');
  });
});

server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
