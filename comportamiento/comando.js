//Genera comandos que se validan y se ejecutan

const Commander = (() => {
    const o = {
        comprar: x => {
            console.log(`Comprando ${x}`)
        },
        vender: x => {
            console.log(`Vendiendo ${x}`)
        }
    }

    return {
        run: (comando, argumentos) => {
            if(!o[comando]) {
                console.log('Comando no existe!');
                return;
            }
            o[comando](argumentos);
        }
    }
})();

Commander.run('comprar', 'auto');
Commander.run('x', 'incorrecto');