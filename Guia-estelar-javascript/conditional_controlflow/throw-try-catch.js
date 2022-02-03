// throw (disparar, lançar)

function sayMyName(name = '') {
  if (name === '') {
    throw new Error('Nome é obrigatório') // ou apenas throw "Nome é obrigatório", mas geralmente é um objeto do tipo error que se usa
  }

  console.log(name)
}
// try... catch ( tentar...pegar) Quando se usa throw é necessário usar try/catch, senão a aplicação vai dar erro e parar.
try {
  sayMyName('Fabio') // se função for vazia, cai no throw e dispara o erro , se for diferente da condição do if, executa normalmente.
} catch (e) {
  console.log(e)
}
console.log('Após o try/catch')
