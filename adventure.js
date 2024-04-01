const name = document.getElementById("name")
const img = document.getElementById("imgpre")
const adventure = document.querySelector("p")

function next(option1, json = {}) {
  if (option1 == 0) {
    const json2 = {
      name: name.value,
			br: document.createElement("br")
    }

    name.remove()

    adventure.innerHTML = ""
  	adventure.innerText = "\"" + json2.name + "?\", the orb curiously says your name out loud. \"That is a very interesting name\", the orb says. The orb leads you to a portal that is also white."
		adventure.appendChild(json2.br)
		adventure.innerText += "Would you go in the portal?"
    img.src = "start1.png"
  }
}

function e(event) {
  if (event.key == "Enter") {
    next(0)
  }
}

name.addEventListener("keydown", e)
