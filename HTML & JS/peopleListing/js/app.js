const personas = [
    new Persona('Pedro', 'Meza'),
    new Persona('Lizeth', 'Rodriguez'),
    new Persona('David', 'Vargas')
]

const mostrarPersonas = () => {
    console.log('Mostrando personas');
    let texto = ''
    personas.map(p => texto += `<li>${p.name} ${p.lastName}</li>`)
    document.getElementById('personas').innerHTML = texto
}

const agregarPersona = () => {
    const forma = document.getElementById('forma')
    let nombre = forma['nombre']
    let apellido = forma['apellido']
    if(nombre.value !== '' && apellido.value !== '' ){
        const persona = new Persona(nombre.value, apellido.value)
        console.log(persona);
        personas.push(persona)
        mostrarPersonas()
    }
    else
        console.log('No hay información');
    
   
}