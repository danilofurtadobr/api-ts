const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000!');
});
