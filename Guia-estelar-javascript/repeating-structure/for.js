//For
// 2 tipos de controle:
// break - para a execução do loop
// continue - pula a execução do momento
/*
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

for (let i = 10; i > 0; i--) {
  console.log(i)
}
*/
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break // nesse caso vai mostrar do 0 ao 4, no 5 ele para a execução do loop.
  }
  console.log(i)
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue // nesse caso vai mostrar do 0 ao 10, pulando o 5, pois no 5 ele pula o console.log e continua o loop.
  }
  console.log(i)
}
