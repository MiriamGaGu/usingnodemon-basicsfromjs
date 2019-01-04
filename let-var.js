// let nombre = 'Wolverin';

// if(true){
//      nombre = 'Magneto'
// }

// console.log(nombre);


/* I this case we're using var so it will return in console
i 1
i 2
i 3
i 4
i 5
*/
// for(var i = 0; i<= 5; i++){
//     console.log(`i: ${i}`);
// }
// console.log(i); /* will return 6 cause finishing the cycle of for it keeps the final value that's 6 */

/* In this example will use let */


for (let i = 0; i <= 5; i++){
    console.log(`i: ${i}`);
}

// console.log(i); /* will return ar error that i is not defined
// this happens cause i only lives in the for scope */

/* But if we declare outside */
let i = 'Hola Mundo';
console.log(i);



