// switch (escolha, uma chave se seleção)
/*
let expression = 'a'

switch (expression) {
  case 'a':
    //codigo
    console.log('a')
    break
  case 'b':
    //codigo para expression b
    console.log('b')
    break
  default:
    console.log('default')
    break
}
*/
function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('operação não implementada')
      break
  }

  return result
}

console.log(calculate(4, '/', 10))
