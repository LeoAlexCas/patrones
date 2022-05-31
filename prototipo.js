//Patron prototipo
//En base a un objeto definido podremos generar prototipos para otros objetos

const perro = {
    raza: "Ponchito",
    ladrar: function() {
        console.log(`Woof de raza ${this.raza}`);
    }
}

perro.ladrar();

//Entonces para usar perro de prototipo usaremos Object.create
const kiltro = Object.create(perro);

kiltro.ladrar();

console.log(perro); //logueara el objeto
console.log(kiltro); //logueara vacio porque las propiedades y metodos estan en el prototipo

//aun asi las propiedades de kiltro se pueden reemplazar, pero cuando lo haces, se crea la propiedad dentro del objeto
//asi que ya no estara vacio
kiltro.raza = "otro perro";
kiltro.ladrar();
console.log(kiltro) //Esto ahora devolvera la raza