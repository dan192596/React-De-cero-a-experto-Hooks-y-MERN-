// Desestrucuturacion
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre:nombre2, edad, clave}=persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// console.log(nombre2);
// console.log(edad);
// console.log(clave);

const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango); 

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 154.1564,
            lng: -12.1564
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);