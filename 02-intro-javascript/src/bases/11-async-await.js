// const getImagenPromesa = () =>{
//     const promesa = new Promise((resolve, reject)=>{
//         resolve('https://fasfasdf.com')
//     })
//     return promesa;
// }

// const getImagenPromesa = () => new Promise(resolve =< resolve('https://dfasdfas.com'));

const getImagen = async () => {

    try{
        const apiKey = '1EAG5NZQcZkYfRCZMIn61cImcXbx7gKO'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch(err){console.error}
}

getImagen();