import { cats } from "./catSeeder.js";
import { renderAllCats, toggleBtnCatInfo } from "./helpers.js";

let containerCats = document.getElementById("allCats")
let listCats = document.createElement("ul")


document.addEventListener("DOMContentLoaded", () => {

    renderAllCats(cats,containerCats, listCats);

    document.addEventListener("click", function (e) {

        if (e.target.parentElement.className === "info") toggleBtnCatInfo(e)
    })

})

