//Esta es la misma implementacion de medidador, pero a atraves de events en nodejs
const Emiter = require('events');

const emiter = new Emiter();

emiter.on('Message', x => {console.log(x)});

emiter.emit('Message', { este: 'Es el mensaje'});