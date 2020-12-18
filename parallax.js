const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  // middelpunt vinden van elke sectie
  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    // hoe ver is de sectie van het zichtbare gedeeldte van de pagina
    const distanceToSection = midViewport - midSection

    // kies welke elementen voor parralex
    const image = section.querySelector("img")
    const contentTag = section.querySelector("div")

    let rotation = distanceToSection / 100
    let contentDist = -1 * distanceToSection / 2

    // voor alle even genummerde secties roteer de andere kant op

    if (index % 2 == 1){
      rotation = rotation * - 1
    }

    image.style.transform = `rotate(${rotation}deg)`

    contentTag.style.top = `${contentDist}px`
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`

    // check background color

    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute("data-background")
      bodyTag.style.backgroundColor = dataBackground
    }

  })
}

addMovement()

document.addEventListener("scroll", function() {
 addMovement()
})

window.addEventListener("resize", function (){
  addMovement()
})