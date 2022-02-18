// alterando estilos

const element = document.querySelector('body');

element.style.backgroundColor = '#f9f3d2';

//classList

const elemento = document.querySelector('h1');

elemento.classList.add('active', 'green'); // adiciona a classe active e green

elemento.classList.remove('active'); // remove a classe active do h1

elemento.classList.toggle('active'); // se não tiver a classe active, ele adiciona a classe, se a classe já existir, ele remove.
