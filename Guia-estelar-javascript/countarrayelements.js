/*
  Manipulando Array

  Contar elementos de um array

*/

console.log(['a', 'b', 'c'].length) // 3
console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ].length
)
console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ][2]() // retorna alo
)

console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ][0] // retorna o elemento 0 do array, que é a
)

console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ][1].type // retorna array, que é o valor da propriedade type do objeto na posição 1 do
)
