// Variables y constantes
const nombre = 'Daniel';
const apellido = 'Perez';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre, apellido){
    return 'Hola Mundo '+nombre;
}

console.log(`Esto es un texto ${getSaludo(nombre, apellido)}`)