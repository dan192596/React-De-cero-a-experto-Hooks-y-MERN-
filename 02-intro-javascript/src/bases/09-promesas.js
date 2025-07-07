import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //    console.log('2 segundos despues') 
//     //    resolve();
//     const heroe = getHeroeById(10);
//     resolve(heroe)
//     // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( (heroe)=>{
//     console.log('heroe',heroe);
// })
// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //    console.log('2 segundos despues') 
            //    resolve();
            const heroe = getHeroeById(id);
            if(heroe==undefined){
                reject('No se pudo encontrar el heroe');
            }
            resolve(heroe);            
        }, 2000);
    });
}

// getHeroeByIdAsync(10)
//     .then(heroe=> console.log('Heroe', heroe))
//     .catch(err => console.warn(err));

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);