// clearInterval irá cancelar um setInterval registrado
const timeOut = 1000;
const checking = () => console.log('checking!');

let interval = setInterval(checking, 1000);

setTimeout(() => clearInterval(interval), 3000);
