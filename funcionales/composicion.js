const users = [
    { edad: 13, nombre: "juan", apellido: "perez" },
    { edad: 19, nombre: "Pedro", apellido: "penrandes" },
    { edad: 52, nombre: "Brian", apellido: "cuma" },
    { edad: 1, nombre: "juanita", apellido: "notancuma" },
]

//esta es una funcion con varias lineas que hacen cosas distintas
// const traePrimerInfante = data => {
//     const infantes = data.filter(x => x.edad < 2 );
//     const primerInfante = infantes[0];
//     const infantePrimario = { 
//         fullName: `${primerInfante.nombre} ${primerInfante.apellido}`,
//         edad: primerInfante.edad
//     }

//     return `${infantePrimario.fullName} tiene ${infantePrimario.edad}`;
// }

//Se puede componer por mas funciones pequeñas
const head = x => x[0];
const creaI = el => ({ fullName: `${el.nombre} ${el.apellido}`, edad: el.edad });
const format = ele => `${ele.fullName} tiene ${ele.edad} años`;

const traerPrimerInfante = data => format(creaI(head(data.filter(x => x.edad < 2))));

console.log(traerPrimerInfante(users));

//mas en el siguiente archivo


