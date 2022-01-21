/*
    Promesas: usamos callbacks functions
            estado pendiente cuando no se ha resuelto, para prosesar la promesa que finalizo correctamente usanmos then()
            si algo salio mal usamos catch()

*/

let myPromise = new Promise((resolved, rejected) => {
    let exp = true
    exp ? resolved('Solved correctly') : rejected('An error has ocurred')
})

// myPromise.then( value => console.log(value), error => console.log(error))
// myPromise.then(value => console.log(value)).catch(error => console.log(error)) //con catch

let promise = new Promise( (resolved) => {
    setTimeout(() => resolved('Greetings using a promise and timeOut'), 2000)
    // console.log('End promise');
})

// promise.then(value => console.log(value))

//anteponer async en un metodo indica que ese metodo esta obligado a retornar una ´promesa
//await espera por el resultado de la promesa

async function promiseFunction(){
    return 'greetings with async and promises'
}
// promiseFunction().then(value => console.log(value))

//async await

async function asyncAwaitFunction(){
    let myPromise = new Promise(resolved => resolved('Promise with await'))
    console.log(await myPromise);
}

// asyncAwaitFunction()


//promesas, sync, await, setTimeOut

async function asyncAwaitTimeOutPromise(){
    console.log('Inicio Funcion');
    let myPromise = new Promise((resolved) => {
        setTimeout(() => resolved('Promise with await and timeOut'), 3000)
    })

    console.log(await myPromise); //esperamos por la respuesta de la promesa
    console.log('Fin funcion');
}

asyncAwaitTimeOutPromise()

