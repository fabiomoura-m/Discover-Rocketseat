const sayMyName = () => console.log('Mayk');
const runFunction = fn => fn(); // recebe uma função e executa essa função

runFunction(sayMyName);
runFunction(() => console.log('discover'));

console.log(runFunction(Math.random));
