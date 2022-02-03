// Function scope

/* let subject = 'Create view'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject) // retorna create view
console.log(createThink(subject)) // retorna study
*/
/*
let subject = 'Create view'

function createThink() {
  subject = 'study'
  return subject
}

console.log(createThink()) // retorna study
console.log(subject) // retorna study tbm pois a função é executada primeiro e sobrescreve 
*/
let subject

function createThink() {
  subject = 'study'
  return subject
}

console.log(subject) // vai mostrar undefined, pq nao tem nada ainda definido na variavel
console.log(createThink()) // a função agora atribui study a variável, retornando study( se não tivesse o return, mostraria undefined tbm pois ele apenas criaria e não retornaria o study)
console.log(subject) // mostra study
