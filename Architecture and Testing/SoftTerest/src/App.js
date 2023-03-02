import { Router } from "./EngineApp/RouterEngine.js";
import { ClickedEvent, SubmitEvent } from "./EngineApp/CommandByEvent.js";


document.addEventListener("DOMContentLoaded", async (e) => {

  document.addEventListener("submit", (e) => {
    e.preventDefault()

    if (SubmitEvent()[e.submitter.textContent]) SubmitEvent()[e.submitter.textContent](e.target)

  })


  document.addEventListener("click", (e) => {
    if (ClickedEvent()[e.target.textContent]) ClickedEvent()[e.target.textContent](e.target)

  })

})
