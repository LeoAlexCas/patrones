//Simplificacion para llamados a metodos

//En este caso se establace una llamada http a una api que devuelve placholders
//Se simplificara en facade2,js
const http = require('http');

//En este caso se crea una facade que nos dara una funcion get que 
//hara toda la funcion de llamado si solo le pasamos la url
const get = url => new Promise((resolve, reject) => {
    const comp = url.split('/');
    const host = comp.shift();

    const options = {
        hostname: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    }
    
    const req = http.request(options, res => {
        res.setEncoding('utf-8');
        let body = '';
        
        res.on('data', d => {
            body += d
        });
        res.on('end', () => {
            const parsed = JSON.parse(body);
            resolve(parsed);
        });
    
        req.on('error', (err) => {
            reject(err);
        });
    });
    
    req.end();
});

//Como transformamos a promesa toda la peticion podemos llamarla en una funcion asincrona
const main = async (url) => {
    const result = await get(url);
    console.log(result);
}

main('jsonplaceholder.typicode.com/users');

