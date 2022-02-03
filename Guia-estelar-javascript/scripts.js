const animals = [
  'Lion',
  'Monkey',
  {
    name: 'cat',
    age: 3
  }
]

// acessar valores
console.log(animals) // mostra todo array
console.log(animals[0]) //mostra lion
console.log(animals[1]) // mostra monkey
console.log(animals[2]) // mostra o objeto que esta dentro do array
console.log(animals[2].name) // mostra dentro do objeto apenas o valor de name
console.log(animals[2]['name']) // outra forma de mostrar dentro do objeto apenas o valor de name
