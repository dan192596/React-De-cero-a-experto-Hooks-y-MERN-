const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5465454,
        lat: 14.46544,
        lng: 34.24564
    }
};

console.log(persona);

const persona2 = {...persona};  
persona2.nombre='Peter';

console.log(persona);
console.log(persona2);
