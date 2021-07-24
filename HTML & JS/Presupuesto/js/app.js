const ingresos = [
    new Ingreso('Sueldo', 2500),
    new Ingreso('Venta Juego', 800),
    new Ingreso('Venta Teclado', 400)
]

const egresos = [
    new Egreso('Pago renta', 1500),
    new Egreso('Pago internet', 600),
    new Egreso('Descuento x', 800)
]


const cargarApp = () => {
    cargarCabecero()
    cargarIngresos()
    cargarEgresos()
}

const totalIngresos = () => {
    let totalIngreso = 0
    ingresos.map(i => totalIngreso += i.valor)
    return totalIngreso
}

const totalEgresos = () => {
    let totalEgreso = 0
    egresos.map(i => totalEgreso += i.valor)
    return totalEgreso
}

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos() /totalIngresos()
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto)
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso)
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos())
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos())
}

const formatoMoneda = (valor) => valor.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}) //internalizacion
const formatoPorcentaje = (valor) => valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits: 2})

const cargarIngresos = () => {
    let ingresosHTML = ''
    ingresos.map(i => ingresosHTML += crearIngresoHTML(i))
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `
    return ingresoHTML
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id) //regresa el indice del arreglo hasta que haya coincidencia
    ingresos.splice(indiceEliminar, 1) //con splice eliminamos elementos, el segundo parametro es para saber cuantos eliminara
    cargarCabecero()
    cargarIngresos()
}

const cargarEgresos = () => {
    let egresosHTML = ''
    egresos.map(e => egresosHTML += crearEgresosHTML(e))
    document.getElementById('lista-egresos').innerHTML = egresosHTML
}

const crearEgresosHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `

    return egresoHTML
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id) //regresa el indice del arreglo hasta que haya coincidencia
    egresos.splice(indiceEliminar, 1) //con splice eliminamos elementos, el segundo parametro es para saber cuantos eliminara
    cargarCabecero()
    cargarEgresos()
}

const agregarDato = () => {
    let forma = document.forms['forma']
    let tipo = forma['tipo']
    let descripcion = forma['descripcion']
    let valor = forma['valor']
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value))
            cargarCabecero()
            cargarIngresos()
        }
        else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value))
            cargarCabecero()
            cargarEgresos()
        }
    }
}