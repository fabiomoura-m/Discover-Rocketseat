// Function hoisting
/*
sayMyName()

function sayMyName() {
  console.log('Fabio')
} // mesmo executando a função antes da criação ela sofrerá hoisting e vai mostrar Fabio no console.
*/
sayMyName()

const sayMyName = function () {
  console.log('Fabio')
} // erro de referência, mesmo usando var dará erro de referência, pois o var sofrerá elevação, porém o sayMyName não é uma função, vai subir como uma variável undefined. Sempre que fazer uma função de maneira de expressão ela não sofrerá elevação
/*
sayMyName()

 sayMyName = function() {
  console.log('fabio')
}
*/ // também dará erro de referência

/*
sayMyName()

 var sayMyName = function sayMyName() {
  console.log('fabio')
}
*/ // também dará erro, o var vai subir como uma variável e não uma função.
