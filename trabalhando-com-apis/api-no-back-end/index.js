const express = require('express'); // chamando o módulo express

const app = express(); // inicializando o express

// listen fica ouvindo o navegador
app.listen('3000'); // criando um server, porta 3000.

// route() função que trabalha com rotas, caminho que o site vai fazer
// req = requisição, res = response
// rota ('/') é a que estamos

//GET
// app.route('/').get((req, res) => res.send('hello'));
// app.route('/sobre').get((req, res) => res.send('hello sobre'));

//POST
// o navegador só faz GET, utilizar o insomnia

//middleware
// app.use(express.json()); // pegando o json do express, antes do insomnia executar o código (req, res) => console.log(req.body) ele vem nesse código e transforma em json.

// app.route('/').post((req, res) => console.log(req.body));
// app.route('/').post((req, res) => res.send(req.body));

// PUT
// put - editar informações

// app.use(express.json());
// let author = 'Fabio';

// app.route('/').get((req, res) => res.send(author));
// app.route('/').put((req, res) => {
//   author = req.body.author; // pega apenas o campo author do json do body
//   res.send(author);
// });

//DELETE

// app.route('/:identificador').delete((req, res) => {
//   res.send(req.params.identificador);
// }); // a variavel identificador vai dentro da requisicao, o params sao todas as variaveis que vem da url e foi pego essa variavel atraves do .identificador

// Aula PARAMETROS

// body params- os 3 verbos que aceitam o body são post, put, patch

// app.use(express.json());
// app.route('/').post((req, res) => {
//   const { nome, cidade } = req.body;
//   res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`);
// });

// route params
// enviar informações através da rota
// app.route('/').get((req, res) => res.send('oi'));

//envia o parametro passado após a /
app.route('/:variavel').get((req, res) => res.send(req.params.variavel));

//outra rota que envia o parametro passado apos o /identidade/
app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome));

// Query params
app.route('/').get((req, res) => res.send(req.query));

app.route('/about/user').get((req, res) => res.send(req.query));
