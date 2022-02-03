// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight) // tipo undefined

/*
  3.  Declare uma variável e atribua valores para cada um dos dados:
      * name: String
      * age: Number (integer) // numero inteiro
      * stars: Number (float) // float é numero quebrado (ex:4.5)
      * isSubscribed: Boolean
*/
let name = 'Fabio'
let age = 29
let stars = 4.5
let isSubscribed = true

// 4. A variável student abaixo é de que tipo de dado?
//let student = {}
//console.log(typeof student) // mostra o tipo de dado, no caso, objeto

//  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
let student = {
  name: 'Fabio',
  age: 29,
  stars: 4.5,
  isSubscribed: true,
  weight: 60.5 //peso
}

// 4.1 Mostre no console a seguinte mensagem:

/*  <name> de idade <age> pesa <weight> kg.
    Atenção, substitua <name> <age> <weight> pelos
    valores de cada propriedade do objeto.
*/
//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg. `)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

let students = []

// 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
students = [student]
console.log(students)

// 7. Coloque no console o valor da posição zero do Array acima
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

const john = {
  name: 'john',
  age: 23,
  weight: 74.8,
  isSubscribed: true
}

students = [student, john] // outra forma seria fazer students[1] = john
console.log(students)

// 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1
// será undefined, porque a variável a ainda não está criada antes do console.log(a), o var é global e vai subir acima como uma variável indefinida (hoisting -> var a)

// 10. E se fosse let no lugar de var, o que vai acontecer agora?
console.log(b)
let b = 1
// vai exibir uma mensagem de erro de referência, pois o let b ainda não está criada e não sofre elevação, apenas o var é global.
