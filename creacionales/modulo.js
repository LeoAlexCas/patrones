//Patron modulo
//Se crea un objeto literal, que contiene propiedades, objetos de configuracion por ejemplo,
//y metodos para modificar la configuracion o para checkear el estado del modulo

const modulo = {
    prop: "mi prop",
    config: {
        lang: "es",
        isCache: true
    },

    setConfig: (conf) => {
        modulo.config = conf;
    }, 

    isCacheEnabled: () => {
        console.log(modulo.config.isCache);
    }
}

modulo.isCacheEnabled();