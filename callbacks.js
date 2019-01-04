
// setTimeout( () =>{
//     console.log('Hello friend?');
// },3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Jan',
        id
    }

    if (id === 15){
        callback(`El usuario con id ${id}, no existe eb la BD`)
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});