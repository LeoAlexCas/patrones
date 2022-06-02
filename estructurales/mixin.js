//Mixin, toma una clase existente y agrega funcionalidades sin modificar la clase, conserva las instancias de la clase
let mixin = {
    saludo() {
        console.log(`Hello ${this.nombre}`);
    },
    despedida() {
        console.log(`Byebye ${this.nombre}`);
    }
}

class User {
    constructor(nombre){
        this.nombre = nombre
    }
}

//aumenta el prototipo con mixin
Object.assign(User.prototype, mixin);

const leo = new User('leo');
leo.saludo();