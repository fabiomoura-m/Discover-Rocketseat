const element = document.getElementById('cabecalho');
console.log(element); // retorna o elemento

const elemento = document.getElementsByClassName('texto');
console.log(elemento); // retorna HTMLCollection

const elemen = document.getElementsByTagName('h3');
console.log(elemen); // retorna HTMLCollection

const elem = document.querySelector('#cabecalho');
console.log(elem); // retorna o elemento

const el = document.querySelectorAll('#cabecalho');
console.log(el); // retorna NodeList, onde pode ser usado o forEach
