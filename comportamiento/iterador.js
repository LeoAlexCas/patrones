//usando funciones generadoras se pueden realizar acciones iterando un array

function* iterador(x = []) {
    let nextIndex = 0;

    while(nextIndex < x.length) {
        yield x[nextIndex++];
    }
}

const lista = [1, 2, 3, 4, 5, 6];
const gen = iterador(lista);
console.log(gen.next());