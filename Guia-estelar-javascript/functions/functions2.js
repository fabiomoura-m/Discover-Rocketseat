// function expression
// function anonymous

// Parâmetros (parameters)
const sum = function (number1, number2) {
  console.log(number1 + number2)
}

sum(2, 3) // passando arguments - argumentos

// Retornando valores dentro da função

const sum = function (number1, number2) {
  console.log(number1 + number2)
}
let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`) // quando ainda está interpolando ele entra na função sum e executa a função e na execução da função tem o console log com a soma, por isso ele já imprime o valor da soma e terminando de executar ele vai retornar, toda função retorna alguma coisa, dessa forma será retornado undefined neste caso.

// Agora adicionando o return na Função

const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}
let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
