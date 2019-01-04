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

let getEmpĺeado = (id) => {

    return new Promise( (resolve, reject) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)
    // console.log(empleadoDB);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve (empleadoDB);
        }

    });

}

let getSalario = (empleado) => {

    return new Promise ( (resolve, reject) => {
        
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
    //  console.log(salarioDeEmpleado);
        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });

    
}

getEmpĺeado(3).then( empleado => {
    console.log('Empleado de base de datos', empleado);

    getSalario(empleado).then (res => {
        console.log(`El salario de  ${res.nombre} es de $ ${res.salario}`)
    }, (err) => {
        console.log(err);
    });

},(err) => {
    console.log(err);
});

