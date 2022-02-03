/*
  Prototype

  * prototype-based language
  * prototype chain
  * __proto__
  
*/

/*

  Type conversion (typecasting) vs Type coersion

  * Alteração de um tipo de dado para outro

*/

console.log('9' + 5) // type coersion, nesse caso haverá a concatenação e o proprio javascript vai converter(de maneira forçada) o number 5 em uma string, resultando em 95

console.log(Number('9') + 5) // type conversion, nesse caso nós estamos dizendo para converter a string '9' para tipo number, resultando na soma 14.
