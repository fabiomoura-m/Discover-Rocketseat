/*
Scope
Escopo determina a visibilidade de alguma variável no JS

Block statement
vamos iniciar um bloco
{
  aqui dentro é um bloco e posso colocar qualquer código
} Aqui fechamos o bloco
O bloco também criará um novo escopo. Chamamos de `block-scoped`
*/

// var é global e também local
// hoisting (elevação)

/*
console.log(`> existe x antes do bloco?`, x)
{
  var x = 0 // nessa situação mostra indefinido, seria como o var subisse para cima do console.log como var x e no bloco ficasse x=0.
}
*/

/*
console.log(`> existe x antes do bloco?`, x) // indefinido
{
  var x = 0
}
console.log(`> existe x depois do bloco?`, x) // mostra o valor de x =0
*/

// let e const
// const e let são locais e só funcionam no escopo onde foi criada

/*
let y = 1
console.log(`> existe y antes do bloco?`, y)
{
  let y = 0
}
console.log(`> existe y depois do bloco?`, y)
*/ // Nessa situação ambos aparecerão como y=1, pois o let y = 0 esta sozinho dentro do scope

/*
let y = 1
console.log(`> existe y antes do bloco?`, y)
{
  let y = 0
  console.log(`> existe y?`, y)
} // nessa situação mostra y=1 para o primeiro e y=0 para o segundo.
*/

/*
let y = 1
{
  let y = 0
  console.log(`> existe y?`, y)
}
console.log(`> existe y depois do bloco?`, y)
*/
// Nessa situação vai mostrar y = 0 e y = 1

/*
let y = 1
{
  y = 0
  console.log(`> existe y?`, y)
}
console.log(`> existe y depois do bloco?`, y)
*/
// Nessa situação ambas mostrarão y=0 , pois o y é atualizado por 0.

/*
const y = 1
{
  y = 0
  console.log(`> existe y?`, y)
}
console.log(`> existe y depois do bloco?`, y)
*/
// Nessa situação vai dar erro, "voce nao pode atribuir valores para uma variável do tipo const"

/*
const y = 1
{
  const y = 0
  console.log(`> existe y?`, y)
}
console.log(`> existe y depois do bloco?`, y)
*/
// Já nessa situação vai mostrar y=0 e y=1, pois mesmos sendo const estão em escopos diferentes (situações diferentes).
