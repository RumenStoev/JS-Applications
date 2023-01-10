import { renderMenu, addItem } from "./template.js";



document.addEventListener("DOMContentLoaded", () => {
    renderMenu()
    document.addEventListener("click", (e) => {
        e.preventDefault()
        if (e.target.value === "Add") addItem()
    })
})


