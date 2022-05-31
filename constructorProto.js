//Constructor con prototipos
Object.prototype.loggear = function() {
    console.log(this);  
};

const objeto = {
    a: 1,
    b: 2
}

objeto.loggear();

//prototipo para strings
String.prototype.mostrar = function() {
    if(this.length > 0) {
        console.log("aqui hay letras");
    } else {
        console.log("esto esta vacio");
    }
}

const hola = "";

hola.mostrar();

//esto sirve para todas las clases
const NuevaClase = class {
    constructor(n1) {
        this.propiedad = n1;
        this.metodo = () => {
            console.log("Metodo");
        }
    }

    otroMetodo() {
        console.log("este es el otro");
    }
}

NuevaClase.prototype.comprobar = function() {
    if(this.metodo) {
        console.log("aqui existe el metodo que loguea");
    } else {
        console.log("aqui no esta el metodo que loguea");
    }
};

const nueva = new NuevaClase(3);
nueva.comprobar();