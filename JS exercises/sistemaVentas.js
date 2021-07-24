class Product{
    static productsCounter = 0

    constructor(name, price){
        this._productID = ++Product.productsCounter
        this._name = name
        this._price = price
    }

    get productID(){
        return this._productID
    }

    get name(){
        return this._name
    }

    set name(name){
        this._name = name
    }

    get price(){
        return this._price
    }

    set price(price){
        this._price = price
    }

    toString(){
        return `ProductID: ${this._productID}, name: ${this._name}, price: $${this._price}`
    }
}

class Order{

    static ordersCounter = 0
    static get MAX_PRODUCTS(){
        return 5
    }

    constructor(){
        this._orderID = ++Order.ordersCounter
        this._products = []
        // this._productsQty = 0
    }

    get orderID(){
        return this._orderID
    }

    addProduct(product){
        this._products.length < Order.MAX_PRODUCTS ? this._products.push(product) : console.log('Products limit reached');
        // this._products[this._productsQty++] = product
    }

    total(){
        let totalSell = 0
        this._products.map(p => totalSell+=p.price)
        return totalSell
    }

    showOrder(){
        let orderProducts = ''
        
        this._products.map(p => orderProducts += '\n {' + p.toString() + '}')
        console.log(`Order: ${this.orderID} Total: $${this.total()}, Products: ${orderProducts}`);
    }
}

let product = new Product('Jean', 30)
let product2 = new Product('T-shirt', 25)
let product3 = new Product('Short', 20)
let product4 = new Product('Short', 20)
let product5 = new Product('Short', 20)
let product6 = new Product('Short', 20)

let order = new Order()
order.addProduct(product)
order.addProduct(product2)
order.addProduct(product3)
order.addProduct(product4)
order.addProduct(product5)

order.showOrder()

let order2 = new Order()

order2.addProduct(product4)
order2.addProduct(product5)
order2.addProduct(product6)
order2.showOrder()
