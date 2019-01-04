/* 
Async - Await
*/

// let getNombre = async() => {

//     return 'Miriam'
// };

// console.log(getNombre());

let getNombre = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Miriam');
        }, 3000)

    }); 
}   

let saludo = async () => {

    let nombre = await getNombre();

    return `Hola ${ nombre}`;
}

saludo().then(msj => {
     console.log(msj);
})
.catch(e => {
    console.log('Error de ASYNC', e);
})