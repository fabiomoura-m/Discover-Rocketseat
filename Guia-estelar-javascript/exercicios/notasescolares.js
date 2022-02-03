/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

de 90 pra cima - A
entre 80 - 89  - B
entre 70 - 79  - C
entre 60 - 69  - D
menor que 60   - F

*/
/*
let score = 69

if (score >= 90 && score <= 100) {
  console.log('A')
} else if (score >= 80 && score <= 89) {
  console.log('B')
} else if (score >= 70 && score <= 79) {
  console.log('C')
} else if (score >= 60 && score <= 69) {
  console.log('D')
} else {
  console.log('F')
}
*/
/*
let score = 40
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal

if (scoreA) {
  scoreFinal = 'A'
} else if (scoreB) {
  scoreFinal = 'B'
} else if (scoreC) {
  scoreFinal = 'C'
} else if (scoreD) {
  scoreFinal = 'D'
} else if (scoreF) {
  scoreFinal = 'F'
} else {
  scoreFinal = 'Nota inválida'
}

console.log(scoreFinal)

*/

// Colocando em uma função

function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0

  let scoreFinal

  if (scoreA) {
    scoreFinal = 'A'
  } else if (scoreB) {
    scoreFinal = 'B'
  } else if (scoreC) {
    scoreFinal = 'C'
  } else if (scoreD) {
    scoreFinal = 'D'
  } else if (scoreF) {
    scoreFinal = 'F'
  } else {
    scoreFinal = 'Nota inválida'
  }

  return scoreFinal
}

console.log(getScore(45))
console.log(getScore(101))
console.log(getScore(65))
console.log(getScore(95))
console.log(getScore(87))
console.log(getScore(75))
console.log(getScore(-8))
