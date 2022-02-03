// Manipulando Array

let techs = ['html', 'css', 'js']

// Adicionar um item no fim
techs.push('nodesj')
console.log(techs)

// Adicionar no começo
techs.unshift('sql')
console.log(techs)

// Remover um elemento do fim
techs.pop()
console.log(techs)

// Remover do começo
techs.shift()
console.log(techs)

// Pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // vai mostrar a partir do elemento da posição 1 até o elemento 3 do array, no caso ["css", "js"]

// Remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1) // remove o "css" do array, ele está na posição 1 e vamos remover 1 item
console.log(techs) // mostra ["html", "js"]

// Encontrar a posição de um elemento no array
let index = techs.indexOf('html')
console.log(index) // mostra em qual posição está o elemento "html" dentro do array
techs.splice(index, 1) // removo o item que está na posição atribuia ao let index, que no caso é a posição 0.

console.log(techs) // mostra apenas o que restou do array, no caso ["js"]
