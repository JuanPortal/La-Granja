const h1 = document.querySelector('h1')

const acercaBtn = document.querySelector('.acerca-btn')
const horarioBtn = document.querySelector('.horario-btn')
const preciosBtn = document.querySelector('.precios-btn')
const contactoBtn = document.querySelector('.contacto-btn')

const banner = document.querySelector('.banner')
const acerca = document.querySelector('.acerca')
const horario = document.querySelector('.horario')
const precios = document.querySelector('.precios')
const contacto = document.querySelector('.contacto')

// const buttons = [acercaBtn, horarioBtn, preciosBtn, contactoBtn]
const sections = [acerca, horario, precios, contacto]
// const dictionary = { acercaBtn: acerca, horarioBtn: horario, preciosBtn: precios, contactoBtn: contacto }

function displaySection(section) {
    banner.style.display = 'none'
    sections.forEach(section => {
        section.style.display = 'none'
    })
    section.style.display = 'flex'
}

displaySection(banner)

h1.addEventListener('click', () => {
    displaySection(banner)
})

acercaBtn.addEventListener('click', () => {
    displaySection(acerca)
})

horarioBtn.addEventListener('click', () => {
    displaySection(horario)
})

preciosBtn.addEventListener('click', () => {
    displaySection(precios)
})

contactoBtn.addEventListener('click', () => {
    displaySection(contacto)
})

