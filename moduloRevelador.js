//modulos que contienen una API publica y una API privada
//En este caso declaramos y ejectuamos una IIFE, esto ademas impide acceder a las variables que estan fuera del IFEE
//El IIFE de por si solo como funcion autoejecutable es un PATRON DE DISEÑO
const result = (() => {
    const x = {}

    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val
    }
})();

//Se puede acceder a lo que viene en el return, pero la const dentro de la funcion no puede ser accedida para mostrarse
//dara undefined
result.a();
result.b("Perro", "Wrande");
result.a();

console.log(result.x); //undefined

//Ejemplo practico
//Aqui Hay una IFEE con 2 metodos, uno para listar desde un recurso y otro para crear con post
//Esto no funcionara porque node no tiene Fetch

const users = (() => {
    const recurso = '/users';

    return {
        listar: async () => {
            return await fetch(recurso).then(x => {x.json()});
        },
        crear: async () => {
            return await fetch(recurso, { type: 'POST', body: JSON.stringify(data)}).then(x => {x.json});
        }
    }

})();

users.crear({user: "leo"});