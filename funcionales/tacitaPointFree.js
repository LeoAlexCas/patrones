//Point free trabaja sin parametros para las funciones
const f = (ruta, cb) => {
    const nuevaVar = bla();
    cb(nuevaVar);
};

//cuando un CB usa un parametro determinado dentro de la funcion que la llama,
//al llamar la funcion que ejecuta el cb, el parametro a que se usa en el callback 
//dentro de la funcion original, aparecera como parametro del CB en la ejecucion
//de ahi sale cosas como los cb en express app.get("/ruta", (req, res) => {})
f('users', (nuevaVar) => {
    //do something with nuevaVar
});
//Esto es una mala practica, hacer unit testing de esto es bastente dificl


const manejarResultado = (resultado) => {
    //do something with nuevaVar
}

f('users', manejarResultado);
//En este caso declaramos la funcion fuera y simplemente se la damos para que la ocupe
//Eso es programacion tacita o point free