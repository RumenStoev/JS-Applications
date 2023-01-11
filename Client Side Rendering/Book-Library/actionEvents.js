import { containerRequests } from "./requests.js"
import { containerHelpers } from "./helpers.js";


class InputsAction {
    constructor(serviceRequest, inputValue) {
        this.serviceRequest = serviceRequest
        this.inputData = inputValue
    }

    async createBook() {
        return await this.serviceRequest
            .createBook(this.inputValue)
            .then(renderTable)
            .catch(console.error)

    }

}



class ButtonsAction {
    constructor(serviceRequest, inputData) {
        this.serviceRequest = serviceRequest;
        this.inputData = inputData;
    }

    async allBooksLoad() {
        return await containerHelpers.displayStateDOM(await containerHelpers.renderTable())
    }


}


let actions = {
    "inputs": new InputsAction(containerRequests),
    "buttons": new ButtonsAction(containerRequests)
}


export {
    actions
}