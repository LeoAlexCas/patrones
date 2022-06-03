//Simplificacion para llamados a metodos

//En este caso se establace una llamada http a una api que devuelve placholders
//Se simplificara en facade2,js
const http = require('http');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users',
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
        console.log(parsed);
    });

    req.on('error', (err) => {
        console.error(err);
    });
});

req.end();
