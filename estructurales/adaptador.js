//ejemplo de api primaria, version antigua
class Api1 {
    constructor() {
        this.operations = function(url, opts, verb) {
            switch(verb) {
                case 'GET':
                    //logica de get
                    break
                case 'POST':
                    //logica de post
                    break
                default:
                    break
            };
        };
    };
};


//ejemplo de v2 de la api, en vez de recibir el verb como parametro son metodos distintos
class Api2 {
    constructor() {
        this.get = () => {
            //logica de get
        };
        
        this.post = () => {
            //logica de post
        };
    };
};

//Si se tuviese que cambiar a la API2 pero la implementacion esta de la API1 en diferentes lugares
//se puede crear un adaptador que diga que esta llamando a la api1, pero llame a la 2 usando los parametros de la antigua

class ApiAdapter {
    constructor() {
        const api2 = new Api2();

        this.operations = function(url, opts, verb) {
            switch(verb) {
                case 'GET':
                    api2.get();
                    break;
                case 'POST':
                    api2.post();
                    break;
            }
        }
    }
}
//esta clase usa la implementacion y parametros de la api1, pero esta llamado a la api 2

const api1 = new Api1();
api1.operations('url', { q: 1 }, 'GET');

const api2 = new Api2();
api2.get('url', { q: 1 });

const apiAdapter = new ApiAdapter();
//Se usa la misma implementacion que api1, pero llamando a api2
apiAdapter.operations('url', { q: 1 }, 'GET');