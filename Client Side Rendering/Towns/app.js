let buttonLoad = document.getElementById("btnLoadTowns")
let inputText = document.getElementById("towns")

let insertElementRoot = (element) => {
    let root = document.getElementById('root');
    let ul = document.createElement("ul")
    root.appendChild(ul)
    ul.innerHTML += `<li>${element}</li>`
}

document.addEventListener("DOMContentLoaded", () => {
    buttonLoad.addEventListener("click", function (e) {
        e.preventDefault()

        if (inputText.value === "") return

        let listTowns = inputText.value.split(", ")
        listTowns.forEach(town => insertElementRoot(town))

        inputText.value = ""
    })

})
