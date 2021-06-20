//////////////////////////Buttom Burguer //////////////////////////////////

const toggleButton = document.getElementById("button-menu")
const navWrapper = document.getElementById("nav")

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("close")
    navWrapper.classList.toggle("show")
})

navWrapper.addEventListener("click", (e) => {
    if (e.target.id === "nav") {
        navWrapper.classList.remove("show")
        toggleButton.classList.remove("close")
    }
})
///////////////////////////Scroll de pagina web /////////////////////////////////////////////////

window.addEventListener("scroll", function (evt) {
    let window = this
    let body = document.body
    let sections = document.getElementsByTagName("section")
    // console.log(window, body, sections)
    let scroll = window.pageYOffset + window.innerHeight / 3
    // console.log("scroll:", scroll)

    for (let section of sections) {
        let currentHeight = parseFloat(this.getComputedStyle(section, null).height.replace("px", ""))
        // console.log("currentHeight: ", currentHeight)
        // console.log(section.className, section.offsetTop)
        if (section.offsetTop <= scroll && section.offsetTop + currentHeight > scroll) {
            body.className = "color-" + section.className
            document.getElementsByTagName("header")[0].className = "main-header color-" + section.className
        }
    }
})

/* Carrousel */

let carrousel = document.getElementsByClassName("carrousel-item")
let length = carrousel.length
let slide = 0

setInterval(() => {
    console.log(slide)
    if (slide >= 0 && slide < length - 1) {
        carrousel[slide].className = "carrousel-item" + " active"
        setTimeout(() => {
            carrousel[slide].className = "carrousel-item"
            slide++
        }, 2000)
    } else {
        carrousel[slide].className = "carrousel-item" + " active"
        setTimeout(() => {
            carrousel[slide].className = "carrousel-item"
            slide = 0
        }, 2000)
    }
}, 2500)

/*Carrusel 2*/
