/* Promise

A promessa de que algo irá acontecer
Poderá dar certo ou errado,
mas irá acontecer

É usado para operações assíncronas
- Carregar arquivo
- Leitura de dados de uma API

Uma promessa poderá ser:
-Pending : Estado inicial, assim que o Objeto da promessa é iniciado
-Fulfilled: A promessa foi concluída com sucesso
-Rejected: A promessa foi rejeitada, houve um erro
-Settled: Seja com sucesso ou com erro, ela foi finamente concluída
*/

const { default: axios } = require('axios');

let aceitar = true;
console.log('pedir uber');
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('pedido aceito');
  }
  return reject('pedido negado');
});
promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('finalizada'));

console.log('aguardando');

// Promisses com Fetch API
/*
fetch('https://api.github.com/users/fabiomoura-m')
  .then(response => response.json()) // retornando uma nova promessa
  .then(data => fetch(data.repos_url)) // retornando uma nova promessa
  .then(res => res.json()) // retornando uma nova promessa
  .then(d => console.log(d))
  .catch(err => console.log(err));
*/

// Promisses com Axios

// axios
//   .get('https://api.github.com/users/fabiomoura-m')
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));
// axios
//   .get('https://api.github.com/users/fabiomoura-m')
//   .then(response => axios.get(response.data.repos_url))
//   .then(repos => console.log(repos.data))
//   .catch(error => console.log(error));

// Executando promessas em paralelo com Promise all

Promise.all([
  axios.get('https://api.github.com/users/fabiomoura-m'),
  axios.get('https://api.github.com/users/fabiomoura-m/repos')
])
  .then(responses => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
  })
  .catch(erro => console.log(erro.message));
