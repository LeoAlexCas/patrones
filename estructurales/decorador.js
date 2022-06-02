class PersonalComputer {
    constructor() {
        this.precio = 10000,
        this.inches = 13
    }
}

const pc = new PersonalComputer();
console.log(pc);

//Decorador basico
pc.agregarMemoria = function() {
    this.precio += 100;
    this.memoria = 16;
}

pc.agregarMemoria();

console.log(pc.precio);
console.log(pc.memoria);