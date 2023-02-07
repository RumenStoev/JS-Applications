import { Router } from "./EngineApp/RouterConfig.js"

document.addEventListener("DOMContentLoaded", (e) => {

    document.addEventListener("click", (e) => {
        e.preventDefault();

        Router()
    })

    Router()
})
