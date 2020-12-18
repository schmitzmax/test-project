const headerTag = document.querySelector("header")

// scroll pagina op een bepaald punt en voeg/remove een class

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset

  if (pixels > 80){
    headerTag.classList.add("scrolled")

  } else {
    headerTag.classList.remove("scrolled")
  }
})

