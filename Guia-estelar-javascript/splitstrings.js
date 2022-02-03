/*
  Manipulando Strings e Arrays

  Separe um texto com contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

*/

let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ') // separa a string em um array, onde tem espaço é separado pois atribuimos o espaço como argumento
console.log(myArray) // ["Eu", "quero", "viver", "o", "Amor!"]

let phraseWithUnderscore = myArray.join('_') // junta o array separando por _
console.log(phraseWithUnderscore.toUpperCase()) // EU_QUERO_VIVER_O_AMOR!
