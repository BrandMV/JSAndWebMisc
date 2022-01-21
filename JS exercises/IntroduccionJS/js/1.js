const product = {
    price: 300,
    stock: true
}

//Destructuring
const { price } = product

console.log(price);

const newArray = [1,2,3,4,5,6,7,8,9,10]
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
const car = [
    { name: "Keyboard", price: 45 },
    { name: "Mouse", price: 30 },
    { name: "Monitor", price: 150 },
    { name: "Tablet", price: 200 },
    { name: "ps5", price: 500 },
    { name: "Keyboard", price: 25 },
]

months.map((m) => console.log(m))

//*Useful array methods
const exists = months.includes("june")
console.log(exists);

//*includes for object array
// let res = car.some((p) => p.name === "ps6")
res = car.some( p => p.name === "ps5")
console.log(res);

//*Reduce
res = car.reduce(function(total, p){
    return total + p.price
}, 0)
res = car.reduce((total, p) => total + p.price, 0)
console.log(res);

//*Filter

res = car.filter(function(product){
    return product.price > 50
})

res = car.filter(function(p){
    return p.name == "Tablet"
})

res = car.filter( product => product.name != "Tablet")
res = car.filter( product => product.price > 50)
console.log(res);


//*Promerty method

const repodrucer = {
    play : function(id){
        console.log(`Playing song ${id}`);
    },
    pause : function(){
        console.log("Pausing...");
    }
}

repodrucer.deleteSong = function(){
    console.log('deleted');
}

repodrucer.play('Yeah mijos')
repodrucer.pause()
repodrucer.deleteSong()


months.forEach( m => {
    if(m == "Mayo" )
        console.log("May exists");
    console.log(m);
} )


const payment = "paypal"

switch (payment) {
    case 'card':
        console.log('paid using card');
        break;

    case 'paypal':
        console.log('paid using paypal');
        break

    default:
        console.log('paid using card');

        break;
}


//*Map vs foreach
//*Foreach to show elements in console use foreach. Map to create a new array

//*this

const reservation = {
    name: 'brandon',
    lastname: 'Meza',
    total: 4000,
    paid: false,
    info: function(){
        console.log(`Client ${this.name} the total is ${this.total}`);
    }
}

const reservation2 = {
    name: 'brandon',
    lastname: 'Meza',
    total: 4000,
    paid: false,
    info: function(){
        console.log(`Client ${this.name}`);
    }
}

reservation.info()

//OOP
//*Object literal
const literalObject = {
    name: 'Brandon',
    age: 20
}
//*Object constructor

//*A class is a way to save
function Producto(name, price){
    this.name = name
    this.price = price

}

//*Nueva instancia
const producto2 = new Producto('Monitor', 800)
const producto3 = new Producto('Monitor2', 900)
const producto4 = new Producto('Monitor3', 500)


console.log(producto2);
console.log(producto3);
console.log(producto4);


Producto.prototype.resetProduct = function(){
    return `${this.name} costs $${this.price}` 
}
console.log(producto3.resetProduct());

class Product{
    constructor( name, price){
        this.name = name
        this.price = price
    }

    resetProduct(){
        return `${this.name} costs $${this.price}` 
    }
}

const prod = new Product('Monitor', 800)

console.log(prod);
console.log(prod.resetProduct());


class Book extends Product{
    constructor(ISBN, name, price){
        super(price, name)
        this.ISBN = ISBN
    }
    resetProduct(){
        return super.resetProduct() + ' ISBN: ' + this.ISBN
    }
}

const book = new Book('123123', "JavaScript", 100)
console.log(book.resetProduct());


//*Promises: value that will be available now, in a future or never. Promises have 3 possible values: pending, fulfilled: promise completed, reject
const myPromise = new Promise( (resolve, reject) => {
    const auth = false
    if( auth ){
        resolve('User autthenticated')
    }else{
        reject('Can not log in')
    }
})
//*Use .then
myPromise.then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
})


//* Async await

function downloadClients(){
    return new Promise( resolve => {
        console.log('Downloading...');
        setTimeout(() => resolve('Clients donwloaded'), 5000)
    })
}

function downloadLastBuys(){
    return new Promise( resolve => {
        console.log('Downloading...');
        setTimeout(() => resolve('Buy donwloaded'), 3000)
    })
}

async function app(){
    try {
        const clients = await downloadClients()
        // console.log(clients);

        // const buys = await downloadLastBuys()
        // console.log(buys);

        const result = await Promise.all([ downloadClients(), downloadLastBuys() ])
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);
    }
}

app()