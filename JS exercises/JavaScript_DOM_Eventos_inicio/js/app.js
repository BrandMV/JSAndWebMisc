//* querySelector: similar to css classes or id, . | #
// const heading = document.querySelector('.header__texto h2') // returns 0 or 1 element
const heading = document.querySelector('#heading') // returns 0 or 1 element
console.log(heading);
heading.textContent = 'New content'


//* querySelectorAll
const links = document.querySelectorAll('.navegacion a')
console.log(links);

links[0].textContent = 'New link text'
links[0].href = 'https://facebook.com'


//* getElementById

const byId = document.getElementById('heading')
console.log(byId);

//* createElement tag in uppercase

const newLink = document.createElement('A')
newLink.href = "nosotros.html"
newLink.textContent = "New Link"
newLink.classList.add('navegacion__enlace')

const nav = document.querySelector('.navegacion')
nav.appendChild(newLink)

console.log(newLink);


//*Events
console.log(1);
//*DOMContentLoaded: solo espera a que se cargue el html, load: espera a que se descargue todo el contenido (css, js, html)
window.addEventListener('load', () => {
    console.log(3);
})

window.onload = () => {
    console.log(2);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
})
console.log(5);

window.onscroll = (e) => {
    console.log(e);
    console.log("scrolling...");
}

//*Select elements and asociate em an event

const btn = document.querySelector('.boton--primario')
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('Sending form...');
// })


//*Inputs and textaea events

const data = {
    nombre: '',
    email: '',
    mensaje: ''
}

//*Submit element
const form = document.querySelector('.formulario')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    //*Validate form
    
    const { nombre, email, mensaje } = data

    if( nombre === '' || email === '' || mensaje === '' ){
        showAlert('Data is required', false)
        return;
    }

    showAlert('Form sent succesfully', true)
})

function showAlert(msg, confirm){
    const alerta = document.createElement('P')
    alerta.textContent = msg
    if(confirm)
        alerta.classList.add('correcto')
    else alerta.classList.add('error')

    form.appendChild(alerta)

    setTimeout(() => {
        // form.removeChild(error)
        alerta.remove()
    }, 3000);
    
}

// function showError(msg){
//     const error = document.createElement('P')
//     error.textContent = msg
//     error.classList.add('error')

//     form.appendChild(error)

//     setTimeout(() => {
//         // form.removeChild(error)
//         error.remove()
//     }, 3000);
// }

// function successForm(msg){
//     const message = document.createElement('P')
//     message.textContent = msg
//     message.classList.add('correcto')

//     form.appendChild(message)

//     setTimeout(() => {
//         // form.removeChild(error)
//         message.remove()
//     }, 3000);
// }





const inputName = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')

const readText = e => {
    // console.log(e.target.value);
    data[e.target.id] = e.target.value
    console.log(data);

} 

inputName.addEventListener('input', readText)
email.addEventListener('input', readText)
mensaje.addEventListener('input', readText)
