import { Router } from "./EngineApp/RouterEngine.js";
import { SubmitEvent } from "./EngineApp/CommandByEvent.js";

document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("submit", (e) => {
        e.preventDefault()
        
        if (SubmitEvent()[e.submitter.textContent]) SubmitEvent()[e.submitter.textContent](e.target)
        
    })


})
