const users = [
    { edad: 13, nombre: "juan", apellido: "perez" },
    { edad: 19, nombre: "Pedro", apellido: "penrandes" },
    { edad: 52, nombre: "Brian", apellido: "cuma" },
    { edad: 1, nombre: "juanita", apellido: "notancuma" },
];

//primero compose recibira las funciones y los transformara en un arreglo.
//luego recibira x que sera el input principal (asumo que users, en este caso)
//Luego reduceRigth ejecutara 
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const filter = f => xs => xs.filter(f);
const head = xs => xs[0];
const creaI = el => ({ 
    fullName: `${el.nombre} ${el.apellido}`, 
    edad: el.edad 
});
const format = ele => `${ele.fullName} tiene ${ele.edad} años`;

const composePrimerInfante = data => compose(format, creaI, head, filter(x => x.edad < 2))(data);

console.log(composePrimerInfante(users));