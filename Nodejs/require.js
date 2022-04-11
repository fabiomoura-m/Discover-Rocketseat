// require()
// maneira de chamar módulos que já são nativos do nodejs ou módulos que podemos criar ou instalar no node.
const path = require('path');

console.log(path.basename(__filename));

// meus módulos

const myModule = require('./exports');

console.log(myModule);
