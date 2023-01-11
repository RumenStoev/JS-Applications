import { containerHelpers } from "./helpers.js";
import { actions } from "./actionEvents.js";


document.addEventListener("DOMContentLoaded", async () => {
     await containerHelpers.displayStateDOM(await containerHelpers.renderTable())

    document.addEventListener("click", (event) => {
        event.preventDefault();
        clickByTagName[event.target.tagName](event.target)
    })
})



let clickByTagName = {

    INPUT: (target) => {
        let propTarget = target.value === undefined ? target.name : target.value;

        let inputTargets = {
            "Submit": () => { },
            "title": () => { },
            "author": () => { }
        }

        return inputTargets[propTarget]()
    },


    BUTTON: (target) => {
        let buttonContext = target.textContent;

        let buttons = {
            "Submit": () => { },
            "LOAD ALL BOOKS": async () =>  await actions.buttons.allBooksLoad()
        }

        return buttons[buttonContext]()

    }
}
