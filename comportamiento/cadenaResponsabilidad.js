//Se encapsula un dato y a traves de metodos se puede ir modificando el valor de este

class Suma {
    constructor(v) {
        this.valor = v
    }

    suma(v) {
        this.valor += v;
        return this;
    }
}
//retornando this, se retorna el valor junto con e metodo el cual se puede volver a encadenar para
//generar un this con valor distinto que se va sumando, y como el return contiene el metodo suma, se puede encadenar

const numero = new Suma(1);
numero
    .suma(1)
    .suma(2)
    .suma(3);

//La idea es que sea claro que estamos cambiando un valor solo a traves de la sintaxis

console.log(numero.valor); // 7
