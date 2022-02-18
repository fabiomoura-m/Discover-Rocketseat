// Navegando pelos elementos
// parentNode parentElement

const body = document.querySelector('body');

console.log(body.parentNode); // retorna o elemento pai, no caso o html

const element = document.querySelector('h1');

console.log(element.parentElement); // retorna o header, que é o pai do h1

// childNodes children
const el = document.querySelector('body');

console.log(el.childNodes); // retorna NodeList, leva em consideração espaço vazio

console.log(el.children); // retorna HTMLCollection, não leva em conta espaços vazios

// firstChild firstElementChild

console.log(el.firstChild); // leva em consideração espaço vazio

console.log(el.firstElementChild); //retorna header

// lastChild lastElementChild

console.log(el.lastChild); // retorna script

console.log(el.lastElementChild); // retorna script

// Navegar pelos elementos irmãos

const elemento = document.querySelector('header');

console.log(elemento.nextSibling); // leva em consideração o espaço vazio

console.log(elemento.nextElementSibling); // retorna o script, não leva em consideração espaços vazios

const elemen = document.querySelector('body script');

console.log(elemen.previousSibling); // leva em consideração espaço vazio

console.log(elemen.previousElementSibling); // retorna o header, não leva em consideração espaços vazios
