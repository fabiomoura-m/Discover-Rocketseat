/*
  function() constructor

  expressão new
  criar um novo objeto
  this keyword
*/
/*
function Person() { // colocar Person em maiúsculo é uma boa prática, pois temos ja no javascript diversas funções construtoras
  this // sempre vai se referenciar ao fabio, e la fora o fabio vai ser referenciado pelo this
}
const fabio = new Person() // quando se usa new seguido da função, a função se torna construtora, e a expressão "new Person()" vai retornar um objeto
console.log(fabio)
*/
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando'
  }
}
const fabio = new Person('Fabio')
const joao = new Person('João')
console.log(fabio.walk())
console.log(joao.walk())

// funções construtoras já presentes no java

let name = new String('Fabio') // objeto do tipo string
console.log(name)

let date = new Date(2021 - 08 - 03)
console.log(date)
