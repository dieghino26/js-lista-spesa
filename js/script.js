const list = document.getElementById("list")

const items = ["cipolla", "aglio", "prezzemolo", "avocado", "pesce", "carne"]

let listItems = ""
let i = 0
while (i < items.length) {
    listItems += `<li>${items[i]}</li>`
    i++
}
list.innerHTML = listItems