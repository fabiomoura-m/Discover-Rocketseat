// criar um aplicativo de frases motivacionais
console.log('Estudar é muito bom')
console.log('Paciência e persistência')
console.log('Revisão é a mãe do aprendizado')

// declaration - declaração da função
// function statement
function createPhrases() {
  console.log('Estudar é muito bom')
  console.log('Paciência e persistência')
  console.log('Revisão é a mãe do aprendizado')
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke
createPhrases()
createPhrases()
createPhrases()

console.log('Fim do programa')

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')

console.log(copo)
