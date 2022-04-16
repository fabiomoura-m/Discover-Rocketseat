const { EventEmitter } = require('events');

const ev = new EventEmitter();

// ev.on('saySomething', () => {
//   console.log('Eu ouvi você');
// });

// ev.emit('saySomething');

// passando argumento

// ev.on('saySomething', message => {
//   console.log('Eu ouvi você', message);
// });

// ev.emit('saySomething', 'Fabio');
// ev.emit('saySomething', 'Joao');
// ev.emit('saySomething', 'Pedro');

// ouvindo o evento apenas uma vez, nesse caso ele ouve apenas o primeiro emit

ev.once('saySomething', message => {
  console.log('Eu ouvi você', message);
});

ev.emit('saySomething', 'Fabio');
ev.emit('saySomething', 'Joao');
ev.emit('saySomething', 'Pedro');

// Herdando do EventEmitter
const { inherits } = require('util');
const { EventEmitter } = require('events');

function character(name) {
  this.name = name;
}

inherits(character, EventEmitter);

const chapolin = new character('Chapolin');

chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`));

console.log('Oh! E agora, quem poderá me defender?');

chapolin.emit('help');
