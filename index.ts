import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import AppDataSource from './src/data-source';
import router from './src/routers/index'

const app = express();
AppDataSource.initialize().then(()=>{
    console.log('con nếch súc sét !')
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('',router)

app.listen(3000,()=>{
    console.log('listening on http://localhost:3000')
})