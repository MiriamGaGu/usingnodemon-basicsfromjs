let empleados = [{

    id: 1,
    nombre: 'Miriam'
},{
    id: 2,
    nombre: 'Carlos'
},{
    id: 3,
    nombre: 'Martin'

}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

let getEmpĺeado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)
    // console.log(empleadoDB);
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    //  console.log(salarioDeEmpleado);
    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpĺeado(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    
    getSalario(empleado, (err, res) => {
        if (err) {
            return console.log(err);
        } 
        console.log(`El salario de ${res.nombre} es de ${res.salario} $`);
    })

} );

/* NOTA */

/* Es muy importante al momento de armar las funciones, que las funciones esten arriba y se manden a llamar abajo, nested callbacks yo lo llamaria, este es un ejemplo claro
Se declaran getEmpleado, abajo getSalario y se mandan a llamar abajo.
Primero getEmpleado y dentro de este llamado getSalario pues necesita de los datos de la función pasada
*/