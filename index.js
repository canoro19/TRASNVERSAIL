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
