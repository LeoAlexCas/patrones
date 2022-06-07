//En vez de suscribirse a un publicador, las clases se suscribiran un mediador que enviara mensajes
const emiter = (() => {
    const topics = {};
    const hOp = topics.hasOwnProperty;

    return {
        on: (topic, listener) => {
            if(!hOp.call(topics, topic)) topics[topic] = []
            topics[topic].push(listener)
            console.log(topics[topic]);
        },
        emit: (topic, info) => {
            if(hOp.call(topics, topic)) return topics[topic].forEach(item => 
                item(info != undefined ? info : {})
            )
        }
    }
})();

emiter.on('mensaje', x => console.log(x));
emiter.emit('mensaje', { mensaje: 'es el mensaje'});
