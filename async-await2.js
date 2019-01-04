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

let getEmpĺeado = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)
    
        if (!empleadoDB) {
            throw new Error(`No existe un empleado con el ID ${id}`)
        } else {
            return (empleadoDB);
        }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`)
        } else {
            return{
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            };
        }

    
}

let getInfo = async(id) => {

    let empleado = await getEmpĺeado(id);
    let res = await getSalario(empleado);

    return `${res.nombre} tiene un salario de $ ${res.salario}`;

}

getInfo(2)
    .then(msj => console.log(msj))
    .catch(err => console.log(err));

