// function sumar (a, b){
//     return a + b;
// }

// console.log(sumar(10, 20));

/* Arrow function regular */
// let sumar = (a, b) => {
//     return a+ b;
// }

/* Arrow function destructurated */

// let sumar = (a, b) => a + b;

// console.log(sumar(10, 20));

// function saludar (){
//     return 'Hello Friend?'
// }

// console.log(saludar());

// let saludar = () => 'Hello Friend?';
// console.log(saludar()); 


// let sayHello = (nombre) => `Hello ${nombre}`;
// console.log(sayHello('Tajara'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} -poder ${this.poder}`
    }
};

console.log(deadpool.getNombre());