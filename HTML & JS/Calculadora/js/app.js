
const sum = () => {
    const formu = document.getElementById('formu')
    let operandoA = formu['operandoA']
    let operandoB = formu['operandoB']
    let res = parseInt(operandoA.value) + parseInt(operandoB.value)
    if(isNaN(res))
        document.getElementById('res').innerHTML = 'Check your values'
    else
        document.getElementById('res').innerHTML = `Your result is: ${res}`


}