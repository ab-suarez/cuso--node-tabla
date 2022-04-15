const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs').argv;


console.clear();
// console.log(process.argv);
const base = 9;

// const [,,arg3 = '--base=5'] = process.argv;
// const [, base] = arg3.split('=');
// console.log( base);

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


// console.log(process.argv);
console.log(argv.base);