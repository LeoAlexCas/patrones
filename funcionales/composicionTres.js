//misma implementacion, pero con una funcion pipe, en realidad es lo mismo, pero con un reduce normal

const users = [
    { edad: 13, nombre: "juan", apellido: "perez" },
    { edad: 19, nombre: "Pedro", apellido: "penrandes" },
    { edad: 52, nombre: "Brian", apellido: "cuma" },
    { edad: 1, nombre: "juanita", apellido: "notancuma" },
];

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const filter = f => xs => xs.filter(f);
const head = xs => xs[0];
const creaI = el => ({ 
    fullName: `${el.nombre} ${el.apellido}`, 
    edad: el.edad 
});
const format = ele => `${ele.fullName} tiene ${ele.edad} años`;

const composePrimerInfante = data => pipe(
    filter(x => x.edad < 2),
    head, 
    creaI, 
    format
    )(data);

console.log(composePrimerInfante(users));