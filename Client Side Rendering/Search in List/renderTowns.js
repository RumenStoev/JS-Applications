import { towns } from "./towns.js";

let containerTown = document.getElementById("towns");
let listTowns = document.createElement("ul")

function renderTowns() {
    towns.forEach(town => {
         listTowns.innerHTML += `<li>${town}</li>`  
    })

    containerTown.appendChild(listTowns)

}




export { renderTowns }


