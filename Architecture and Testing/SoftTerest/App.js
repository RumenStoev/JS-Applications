import { Router } from "./EngineApp/RouterEngine.js";
import { ClickedEventByText } from "./EngineApp/CommandByEvent.js";

document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("click", (e) => {
        e.preventDefault();

        if (ClickedEventByText()[e.target.textContent]) ClickedEventByText()[e.target.textContent](e.target)
        
    })

    document.addEventListener("submit", (e) => {
        e.preventDefault()
    })


})
