// Criando e adicionando elementos

//createElement

const div = document.createElement('div');
div.innerText = 'Olá devs!';

// append prepend
const body = document.querySelector('body');

// body.append(div); //será colocado no final do body, apos o script

// body.prepend(div); // será colocado no início do body, antes do header.

// insertBefore
// agora vamos adicionar a div no meio, entre o header e o script

const script = body.querySelector('script'); // pode usar o body ao inves de document pois já selecionamentos ele e o script está dentro dele.
body.insertBefore(div, script); // recebe 2 argumentos, (elemento novo a colocar, nó de referência), logo, será adicionado a div antes do elemento script.

// simulando um inserafter , que não existe.

const header = document.querySelector('header');
body.insertBefore(div, header.nextSibling); // será adicionado após o header, pois nesse caso está pegando a div e adicionando antes do próximo irmão do header.
