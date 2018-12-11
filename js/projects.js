/////////////////////////////////////////////IMPORTS/////////////////////////////////////////////
import {projects} from '../assets/projecstApi.js'


////////////////////////////////////////////VARIABLES////////////////////////////////////////////
let javaProjects = document.querySelector('.javaProjects')
let webProjects = document.querySelector('.webProjects')

////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////
const makeCard = (element) => {
    let card = document.createElement('div')
    let cardContent = document.createElement('div')
    let cardText = document.createElement('div')

    let img = document.createElement('img')
    let title = document.createElement('a')
    let text = document.createElement('p')

    card.appendChild(title)
    card.appendChild(cardContent)
    cardContent.appendChild(img)
    cardContent.appendChild(cardText)
    cardText.appendChild(text)

    card.className = 'card'
    cardContent.className = 'cardContent'
    cardText.className = 'cardText'
    img.className = 'cardImg'
    title.className = 'cardTitle'

    img.src = `${element.image}`
    text.textContent = element.text
    title.textContent = element.name
    title.href = element.link
    title.target = element.target

    switch(element.type){
        case "JavaScript":
        javaProjects.appendChild(card)
            break

        case "WebDesign":
        webProjects.appendChild(card)
            break
    }
}

projects.forEach(element => {makeCard(element)})