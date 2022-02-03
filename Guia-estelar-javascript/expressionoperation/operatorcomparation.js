// Operadores de Comparação
// Irá retornar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual a (Não compara tipo, apenas valor)
console.log(two == 1) //false
console.log(one == '1') //true

// != diferente de (Não compara tipo, apenas valor)
console.log(one != two) //true
console.log(one != 1) // false
console.log(one != '1') // false

// === estritamente igual a (Compara valor e tipo)
console.log(one === 1) //true
console.log(one === '1') // false

// !== estritamente diferente de (Compara valor e tipo)
console.log(one !== 1) // false
console.log(one !== '1') // true

// > maior que
console.log(one > two) // false

// >= maior igual a
console.log(one >= 1) // true
console.log(two >= 1) // true

// < menor que
console.log(one < two) // true

// <= menor igual a
console.log(one <= two) //true
console.log(one <= 1) // true
console.log(one <= 0) // false
