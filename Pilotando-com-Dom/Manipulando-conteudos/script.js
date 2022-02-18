const element = document.querySelector('h1');

// element.textContent += ' Olá Devs';

// element.innerText = ' Olá Devs!';

element.innerHTML = 'Olá Devs! <small>!!!</small>';

const elemento = document.querySelector('input');
console.log(elemento.value);
elemento.value = 'Valor que eu quiser';

//Manipulando atributos

const section = document.querySelector('section');
section.setAttribute('id', 'principal'); // adiciona o atributo id ="principal"

const sectionID = document.querySelector('#principal');

console.log(sectionID.getAttribute('class')); // pegando o atributo

section.removeAttribute('id'); // removendo o atributo id
