import { containerHelpers } from "./helpers.js";
import { actions } from "./actionEvents.js";

document.addEventListener("DOMContentLoaded", async () => {
    await containerHelpers.displayStateDOM(await containerHelpers.renderTable())

    document.addEventListener("click", (event) => {
        event.preventDefault();

        clickByTagName[event.target.tagName](event.target)

    })

    document.addEventListener("submit", (event) => {
        event.preventDefault()
        clickByTagName[event.target.tagName](event.target)
    })
})



let clickByTagName = {

    INPUT: (target) => {
        let getInputByValue = target.value;
        let formTag = target.parentNode
       
        let inputTargets = {
            "Submit": async() => await actions.inputs.addBook(formTag),
            "Save": async() => await actions.inputs.saveUpdateBook(formTag,target)

        }

        return inputTargets[getInputByValue]()
    },


    BUTTON: (target) => {
        let getBtnByContext = target.textContent;
        
        let buttons = {
            "Submit": () => { },
            "LOAD ALL BOOKS": async () => await actions.buttons.allBooksLoad(),
            "Edit": async(target) => await actions.buttons.displayEditForm(target),
            "Delete": () => console.log(`delete`),
            
        }

        return buttons[getBtnByContext](target)

    }
}
