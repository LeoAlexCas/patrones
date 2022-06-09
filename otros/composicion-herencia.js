//Esto es basicamente una manera de evitar la sobre herencia
//En corto es definir los metodos fuera de las clases y entregarselos dentro de sus metodos internos
//Asi evitamos tener que hacer herencia para agregar metodos a clases distintas

const saludo = (name) => {
    console.log(`Hola ${name}`);
};

class Person {
    constructor() {
        this.nombre = 'Juan';
    }

    saludar() {
        saludo(this.nombre)
    }
};