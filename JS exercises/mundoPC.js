class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }
    
    get marca(){
        return this._marca
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    set marca(marca){
        this._marca = marca
    }

}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones
    }

    get idRaton(){
        return this._idRaton
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this._marca}]`
    }

}

let raton1 = new Raton('USB', 'Logitech')
console.log(raton1.toString());
let raton2 = new Raton('USB', 'HP')
console.log(raton2.toString());
raton2.marca = 'Aorus'
console.log(raton2.toString());

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclado
    }

    get idTeclado(){
        return this._idTeclado
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}

let teclado1 = new Teclado('USB', 'Logitech')
let teclado2 = new Teclado('Bluetooth', 'MSI')
console.log(teclado1.toString());

class Monitor{
    static contadorMonitores = 0

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }

    get tamaño(){
        return this._tamaño
    }
    set tamaño(tamaño){
        this._tamaño = tamaño
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`
    }
}

let monitor1 = new Monitor('HP', '24 Pulgadas')
let monitor2 = new Monitor('Gigabyte', '27 Pulgadas')

console.log(monitor1.toString());
console.log(monitor2.toString());

class Computadora{
    static contadorComputadoras = 0

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._raton = raton
        this._monitor = monitor
        this._teclado = teclado
    }

    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado} `
    }
}

let pc1 = new Computadora('La mamalona', monitor1, raton1, teclado1)
console.log(pc1.toString());
console.log(`${pc1}`) //con tempalte string se manda a llamar toString()

let pc2 = new Computadora('Armada', monitor2, raton1, teclado2)
console.log(`${pc2}`);

class Orden{
    static contadorOrden = 0
    
    constructor(){
        this._idOrden = ++Orden.contadorOrden
        this._computadoras = []
    }

    get idOrden(){
        return this._idOrden
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadorasOrden = ''
        this._computadoras.map(c => computadorasOrden += `\n${c}`)
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden()
orden1.agregarComputadora(pc1)
orden1.agregarComputadora(pc2)
orden1.mostrarOrden()

let orden2 = new Orden()
orden2.agregarComputadora(pc2)
orden2.agregarComputadora(pc1)
orden2.mostrarOrden()