import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const connection = new PgPromiseConnection();

app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});
