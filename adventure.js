const name = document.getElementById("name")
const img = document.getElementById("imgpre")
const adventure = document.querySelector("p")

function next(option1, json = {}) {
  if (option1 == 0) {
    const json2 = {
      name: name.value
    }

    name.remove()

    adventure.innerHTML = ""
    adventure.innerText = "\"" + name + "?\", the orb curiously says your name out loud. \"That is a very interesting name.\""
    img.src = "start1.png"
  }
}

function e(event) {
  if (event.key == "Enter") {
    next(0)
  }
}

name.addEventListener("keydown", e)
