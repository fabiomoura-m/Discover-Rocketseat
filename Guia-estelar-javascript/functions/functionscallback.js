// Callback function

function sayMyName(name) {
  console.log('Antes de executar a função callback')
  name()
  console.log('Depois de executar a callback')
}

sayMyName(() => {
  console.log('Executando a callback')
})

// seria a mesma forma de estarmos colocando como abaixo
/*
function sayMyName(name) {
  console.log('Antes de executar a função callback')
  function name() {
    console.log('Executando a callback')
  }
  name()
  console.log('Depois de executar a callback')
}

sayMyName()
*/
