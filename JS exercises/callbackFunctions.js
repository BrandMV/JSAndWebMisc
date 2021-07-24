myFunction1()
myFunction2()
function myFunction1(){
    console.log('Function 1');
}

function myFunction2(){
    console.log('Function 2');
}
//funcion tipo callback; recibimos funcion como argumento y la podemos mandar a llamar en cualquier momento, se vuelve a llamar a la funcion
//con callbacks podremos ejecutar procesos asincronos
function print(message){
    console.log(message);
}
function sum(n1, n2, print){ //callback es una funcion
    let res = n1 + n2
    print(`Resultado: ${res}`)
}

sum(5, 10, print)

//llamadas asincronas con setTimeOut
function myCallbackFunction(){
    console.log('Asyncronus greeting after 3s');
}

setTimeout(myCallbackFunction, 3000) //primer parametro es una funcion callback y tiempo en ms
setTimeout(() => console.log('Yeah after 1s'), 1000)

//setInterval; manda  a llamar la callbakc funcion cada cierto tiempo
const clock = () => {
    let date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
// setInterval(clock, 3000)
