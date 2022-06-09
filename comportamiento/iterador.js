//usando funciones generadoras se pueden realizar acciones iterando un array

function* iterador(x = []) {
    let nextIndex = 0;

    while(nextIndex < x.length) {
        yield x[nextIndex++];
    }
}

//Cuando el metodo next() del iterador es llamado , el cuerpo de la función generadora es ejecutado hasta la primera expresión yield, 
//la cual especifica el valor que será retornado por el iterador o con, yield*, delega a otra función generadora. El método next() retorna un objeto 
//con una propiedad value que contiene el valor bajo el operador yield y una propiedad done que indica, con un booleano, si la función generadora ha 
//hecho yield al último valor.

const lista = [1, 2, 3, 4, 5, 6];
const gen = iterador(lista);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());