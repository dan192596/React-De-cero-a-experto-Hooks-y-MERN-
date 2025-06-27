// Funciones en JS

const saludar = function (nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Trunks'));
console.log(saludar4());

const getUser = () => (
    {
        uid: 'ABCD123',
        username: 'dan192596'
    }
);


console.log(getUser());

//Tarea
// 1. Funcion de flecha
// Retornar objeto implicito
// 3 Pruebas
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) =>(
    {
        uid: 'ABC567',
        username: nombre
    }
);

const usuarioActivo2 = getUsuarioActivo('Fernando');
console.log(usuarioActivo2);

