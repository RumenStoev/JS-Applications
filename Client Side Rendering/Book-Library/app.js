import { containerHelpers } from "./helpers.js";
import { actions } from "./actionEvents.js";

document.addEventListener("DOMContentLoaded", async () => {
    
    let stateTable = await containerHelpers.displayStateDOM().displayTable()
    containerHelpers
        .displayStateDOM()
        .displayFragment(stateTable)

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
            "Submit": async () => await actions.inputs.addBook(formTag),
            "Save": async () => await actions.inputs.saveUpdateBook(formTag, target)

        }

        return inputTargets[getInputByValue]()
    },


    BUTTON: (target) => {
        let getBtnByContext = target.textContent;

        let buttons = {
            "LOAD ALL BOOKS": async () => await actions.buttons.allBooksLoad(),
            "Edit": async (target) => await actions.buttons.displayEditForm(target),
            "Delete": async (target) => await actions.buttons.deleteBook(target),

        }

        return buttons[getBtnByContext](target)

    }
}
