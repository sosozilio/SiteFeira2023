import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import Endpoints from './controller/teste.js';

const server=express();
server.use(cors());

server.use(Endpoints);

server.listen(process.env.PORT, console.log(`API subiu na porta ${process.env.PORT}`));