const express = require('express'); // chamando o módulo express

const app = express(); // inicializando o express

// listen fica ouvindo o navegador
app.listen('3000'); // criando um server, porta 3000.

//middleware
app._router(express.json());

app.route('/').get((req, res) => res.send(req.query.name));

app.route('/').put((req, res) => res.send(req.body.author));

app.route('/:parametro').get((req, res) => res.send(req.params.parametro));
