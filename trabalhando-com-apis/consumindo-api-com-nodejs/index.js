const express = require('express'); // chamando o módulo express
const axios = require('axios'); // chamando o axios

const app = express(); // inicializando o express

// listen fica ouvindo o navegador
app.listen('3000'); // criando um server, porta 3000.

app.route('/').get((req, res) => {
  axios
    .get('https://api.github.com/users/fabiomoura-m')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error));
});
