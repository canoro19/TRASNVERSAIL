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
        // if (section.className !== "landing") {
        let currentHeight = parseFloat(this.getComputedStyle(section, null).height.replace("px", ""))
        // console.log("currentHeight: ", currentHeight)
        if (section.offsetTop <= scroll && section.offsetTop + currentHeight > scroll) {
            body.className = "color-" + section.className
            document.getElementsByTagName("header")[0].className = "main-header color-" + section.className
        }
        // }
        // comentar lineas de abajo si no les gusta como queda
        // else {
        //     body.className = "color-" + section.className
        //     document.getElementsByTagName("header")[0].className = "main-header"
        // }
    }
})

/* carousel 1*/

let carousel1 = document.getElementById("carousel-1")
let slides1 = carousel1.children[0].children
let buttons1 = carousel1.querySelectorAll(".carousel-button > .button")
let length1 = slides1.length
let presenter1 = startAutoMode(0, slides1, buttons1)

function showSlide1(index) {
    clearInterval(presenter1)
    for (slide of slides1) {
        slide.className = "carousel-item"
    }
    for (button of buttons1) {
        button.className = "button"
    }
    slides1[index].className = "carousel-item" + " active"
    buttons1[index].className = "button active"
    presenter1 = startAutoMode(index, slides1, buttons1)
}

/* carousel 2*/

let carousel2 = document.getElementById("carousel-2")
let slides2 = carousel2.children[0].children
let buttons2 = carousel2.querySelectorAll(".carousel-button > .button")
let length2 = slides2.length
let presenter2 = startAutoMode(0, slides2, buttons2)

function showSlide2(index) {
    clearInterval(presenter2)
    for (slide of slides2) {
        slide.className = "carousel-item"
    }
    for (button of buttons2) {
        button.className = "button"
    }
    slides2[index].className = "carousel-item" + " active"
    buttons2[index].className = "button active"
    presenter2 = startAutoMode(index, slides2, buttons2)
}

function startAutoMode(slideIndex, slides, buttons) {
    slideIndex = slideIndex || 0
    return setInterval(() => {
        slides[slideIndex].className = "carousel-item" + " active"
        buttons[slideIndex].className = "button active"
        setTimeout(() => {
            slides[slideIndex].className = "carousel-item"
            buttons[slideIndex].className = "button "
            if (slideIndex >= 0 && slideIndex < slides.length - 1) {
                slideIndex++
            } else {
                slideIndex = 0
            }
        }, 2000)
    }, 2100)
}

/*Carrusel 2*/
