//Patron construcutor
const NuevaClase = class {
    constructor(n1) {
        this.propiedad = n1;
        this.metodo = () => {
            console.log("Metodo");
        }
    }
}

//como esta en el constructor, podemos dar parametros, aca tambien es donde se inyectan dependencias a una clase
const nueva = new NuevaClase(3);
console.log(nueva);
nueva.metodo();