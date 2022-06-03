class PersonalComputer {
    precio() {
        return 1000;
    }
}

//decorador mas complejo
const memoria = pc => {
    const v = pc.precio();
    pc.precio = function() {
        return v + 100;
    }
}

const otroPc = new PersonalComputer();
memoria(otroPc);

console.log(otroPc.precio());

