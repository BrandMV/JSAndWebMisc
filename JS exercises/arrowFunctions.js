myfunction()

function myfunction(){
    console.log('Normal Function');
}

const myArrowFunction = () => console.log('Arrow Function');
myArrowFunction()

const greeting = () => 'greetings from my arrow function'
console.log(greeting());

//regresando un objeto

const objectArrow = () => ({Name: 'Brandon', lastName: 'Meza'})
console.log(objectArrow());

const functionParameters = (message) => console.log(message);
functionParameters('Hi there! ')

const sum = (n1, n2) => `Resultado ${n1 + n2}`
console.log(sum(20,5));