// eventos

function print() {
  console.log('print');
}

// evendo de teclado
const input = document.querySelector('input');

// quando clica na tecla; se ficar clicado, vai permanecer executando a função
// input.onkeydown = function () {
//   console.log('rodei');
// };

//quando solta a tecla; se ficar clicado, nada acontece, apenas quando soltar que executa a função

// input.onkeyup = function () {
//   console.log('soltei');
// };

// Adicionando eventos

const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', print);
// pegamos o h1 e quando o evento de mouseover ocorrer ele executará a funcao print.

// Argumento event

input.onkeyup = function (event) {
  console.log(event);
};
