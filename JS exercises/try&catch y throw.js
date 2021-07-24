'use strict' //modo estricto


// try {
//     let x = 10
//     // myFunction()
//     throw 'Error personalizado' //con throw lanzamos nuestros propios errores
    
// } catch (error) {
//     console.log(error);
// }
// finally{
//     console.log('log inside the finally block, errors check finished');

// }//finally siempre se ejecuta

// console.log('Con try & catch, cachamos el error y se sigue ejecutando el codigo');


let res = 'e'

try {
    if( isNaN(res)) throw 'It is not a number'
    else if( res === '') throw 'Empty string'
    else if(res >= 0) throw 'Positive value'
    else if(res <= 0) throw 'Negative value'
    
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Errors check finished');
}
