/*
Object
-Objeto
-Propriedades / Atributos
-Funcionalidades / Métodos

{propriedade: "valor"}
*/
console.log({}) // um objeto vazio
console.log({
  name: 'Fabio',
  idade: 29,
  andar: function () {
    console.log('andar')
  } // exemplo de método, uma funcionalidade dentro do objeto
})
// Object

const person = {
  name: 'Fabio',
  age: 30,
  weight: 88.6,
  isAdmin: true
}
console.log(person) // mostra todo objeto
console.log(person.name) // mostra apenas a propridade name
console.log(`${person.name} tem ${person.age} anos`) // usando interpolação

person.age = 25 // atribui novo valor a propriedade age
person.height = 1.6 // adiciona essa nova propriedade ao objeto person

console.log(person)

// tbm é possível colocar uma propriedade do tipo array dentro de um objeto

person.hobby = ['Futebol', 'netflix', 'games']

console.log(person)
// acessando um valor especifico do index da propriedade hobby

console.log(person.hobby[0]) // mostra futebol
