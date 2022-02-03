/* Sistema de gasto familia

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
receitas: []
despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo.

*/
let family = {
  incomes: [1500, 400.5, 300.42],
  expenses: [300.29, 200.97, 150, 350.68]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculeteExpenses = sum(family.expenses)

  const saldo = calculateIncomes - calculeteExpenses

  // if (saldo < 0) {
  //   console.log('Saldo negativo')
  // } else {
  //   console.log('Saldo positivo')
  // }
  // return saldo

  const itsOk = saldo >= 0

  let balanceText = 'negativo'

  if (itsOk) {
    balanceText = 'positivo'
  }

  console.log(`Seu saldo é ${balanceText}: ${saldo.toFixed(2)} reais`)
}
calculateBalance()
