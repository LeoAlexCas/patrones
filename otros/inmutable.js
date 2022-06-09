//Esta es una clase de inmutablidad, solo contiene ciertas practicas para evitar mutar objetos que puedan influir
//En el resto del codigo

//Uso de const
const objeto = {
    nombre: 'leo'
}

objeto.apellido = 'cas'; //este se ira con el spread operator pero si lo declaramos despues del segundo objeto no se clonara

//para poder modificar tendremos que usar un spread operator para traerse las propiedades del objeto a modificar 
//en este nuevo const

const objeto2 = {
    ...objeto,
}

console.log(objeto);
console.log(objeto2);