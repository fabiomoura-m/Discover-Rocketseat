// Estrutura de Repetição

// for...in cria um loop em cima de um objeto

let person = {
  name: 'John',
  age: 30,
  weight: 88.6
}

for (let property in person) {
  console.log(property) // retorna as propriedades name age e weight
  console.log(person[property]) // retorna o valor das propriedades
}
