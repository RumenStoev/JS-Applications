import { renderTowns } from "./renderTowns.js";



document.addEventListener("DOMContentLoaded", () => {

    renderTowns()

    document.addEventListener("click", (e) => {
        if (e.target.textContent === "Search") search()
    })

})


function search() {

    let searchTextInput = document.getElementById("searchText")
    let listTowns = document.querySelectorAll("li")


    let counterMathedTowns = findMatchedTown(listTowns, searchTextInput)

    return renderResult(counterMathedTowns)
}



function isMatched(town, text) {
    let textInput = text.value
    let townText = town.textContent

    return (townText.toLowerCase().includes(textInput.toLowerCase())) ? town.className = "active" : null

}

function findMatchedTown(listTowns, text) {
    let counter = 0;

    Array.from(listTowns).forEach(town => isMatched(town, text) ? counter++ : null)

    text.value = ""

    return counter;
}


function renderResult(counterTowns) {

    let result = document.getElementById("result")

    return (counterTowns > 0) ? result.innerHTML = `${counterTowns} matches found` : ""
}


