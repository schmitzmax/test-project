let number = 0;
const stamps = [
  "assets/circles.svg",
  "assets/heart.svg",
  "assets/moon.svg",
  "assets/rainbow.svg",
  "assets/waves.svg",
  "assets/shooting-star.svg"
]

const stampsTag = document.querySelector("div.stamps")

const addStamp = function (x, y) {
 const img = document.createElement("img")
 img.setAttribute("src", stamps[number])
 img.style.position = "absolute"

 // verwijderen helft van pagina om stamps te centeren
 img.style.left = (x - window.innerWidth / 2+ "px")
 img.style.top = y + "px"

 stampsTag.appendChild(img)

 // voeg audio toe bij klikken stamp
const audio = document.createElement("audio")
audio.setAttribute("src", "assets/plop.mp3")
audio.play()

 number = number + 1

 if (number > stamps.length - 1){
   number = 0;
 }
}

document.addEventListener("click", function (event) {
  addStamp(event.pageX, event.pageY)
})