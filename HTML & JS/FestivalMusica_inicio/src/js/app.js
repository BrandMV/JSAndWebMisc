document.addEventListener('DOMContentLoaded', function() {
    startApp()
})


function startApp() {
    fixedNav()
    createGalery()
    scrollNav()
}

function fixedNav(){
    const header = document.querySelector('.header')
    const aboutFestival = document.querySelector('.about-festival')
    const body = document.querySelector('body')


    window.addEventListener('scroll', () => {
        // console.log(aboutFestival.getBoundingClientRect());
        if(aboutFestival.getBoundingClientRect().top < 0){
            header.classList.add('fixed')
            body.classList.add('fixed')
        }
        else{
            header.classList.remove('fixed')
            body.classList.remove('fixed')
        } 
    })
}

function scrollNav(){
    const links = document.querySelectorAll('.main-nav a')
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const scrollSection = e.target.attributes.href.value
            const section = document.querySelector(scrollSection)
            section.scrollIntoView({ behavior: "smooth" })
        })
    })
}

function createGalery() {
    const galery = document.querySelector('.images-galery')

    for(let i = 1; i <= 12; i++){
        const images = document.createElement('picture')
        images.innerHTML = `
            <source srcset="./build/img/thumb/${i}.avif" type="image/avif"> <!--Primero-->
            <source srcset="./build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Galery image">
        `

        images.onclick = function(){
            showImage(i)
        }

        galery.appendChild(images)
    }
}

function showImage(id){
    const images = document.createElement('picture')
        images.innerHTML = `
            <source srcset="./build/img/grande/${id}.avif" type="image/avif"> <!--Primero-->
            <source srcset="./build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Galery image">
        `

    //*Creating overlay
    const overlay = document.createElement('DIV')
    overlay.appendChild(images)
    overlay.classList.add('overlay')
    overlay.onclick = function(){
        const body = document.querySelector('body')
        body.classList.remove('body-fixed')
        overlay.remove()
    }

    //*Button to close modal
    const closeModal = document.createElement('P')
    closeModal.textContent = 'X'
    closeModal.classList.add('btn-cerrar')
    overlay.appendChild(closeModal)

    closeModal.onclick = function(){
        const body = document.querySelector('body')
        body.classList.remove('body-fixed')
        overlay.remove()
    }

    


    //*Adding overlay to html
    const body = document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('body-fixed')
}