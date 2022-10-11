const h1 = document.querySelector('h1')

const acercaBtn = document.querySelector('.acerca-btn')
const horarioBtn = document.querySelector('.horario-btn')
const contactoBtn = document.querySelector('.contacto-btn')

const portada = document.querySelector('.portada')
const acerca = document.querySelector('.acerca')
const horario = document.querySelector('.horario')
const contacto = document.querySelector('.contacto')

const buttons = [acercaBtn, horarioBtn, contactoBtn]
const sections = [acerca, horario, contacto]

function displaySection(section) {
    portada.style.display = 'none'
    sections.forEach(section => {
        section.style.display = 'none'
    })
    section.style.display = 'flex'
}

displaySection(portada)

function clickedButton (button) {
    buttons.forEach(button => {
        button.style.textDecoration = 'none'
    })
    button.style.textDecoration = 'underline'
}

h1.addEventListener('click', () => {
    displaySection(portada)
    buttons.forEach(button => {
        button.style.textDecoration = 'none'
    })
})

acercaBtn.addEventListener('click', () => {
    displaySection(acerca)
    clickedButton(acercaBtn)
})

horarioBtn.addEventListener('click', () => {
    displaySection(horario)
    clickedButton(horarioBtn)
})

contactoBtn.addEventListener('click', () => {
    displaySection(contacto)
    clickedButton(contactoBtn)
})

// HAMBURGER MENU

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    console.log('clicked')
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
})

// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         hamburger.classList.remove('active')
//         nav.classList.remove('active')
//     })
// })