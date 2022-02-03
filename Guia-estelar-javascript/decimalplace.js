/*
  Manipulando Strings e Números

  Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
*/

let number = 345.33452345
console.log(number.toFixed(2))
console.log(number.toFixed(2).replace('.', ',')) // 345,33 no tipo string
console.log(Number(number.toFixed(2).replace('.', ','))) // passando para number, retornará NaN, not a number, porque não existe número com (,). Todo number é usando com ponto.
