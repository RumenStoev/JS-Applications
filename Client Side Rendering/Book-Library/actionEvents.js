import { containerRequests } from "./requests.js"
import { containerHelpers } from "./helpers.js";


class InputsAction {
    constructor(serviceRequest, helperService) {
        this.serviceRequest = serviceRequest
        this.helperService = helperService
    }

    async createBook() {
        return await this.serviceRequest
            .createBook(this.inputValue)
            .then(renderTable)
            .catch(console.error)

    }

    async addBook(tagForm) {

        let dataForm = await this.helperService.form().getDataForm(tagForm)
        return await containerRequests
            .createBook(dataForm)
            .catch(console.error)
    }

    async saveUpdateBook(currentForm,target) {
        let idStudent = target.id
          console.log(idStudent)
        let editFormData = await this.helperService.form().getDataForm(currentForm)
            return await containerRequests
                            .updateBook(editFormData,idStudent)
                            .catch(console.error)
    }
}



class ButtonsAction {
    constructor(serviceRequest, helperService) {
        this.serviceRequest = serviceRequest;
        this.helperService = helperService;
    }

    async allBooksLoad() {
        return await containerHelpers
            .displayStateDOM(await containerHelpers.renderTable())
    }

    async displayEditForm(currentRow) {
        let dataRow = this.helperService.getDataRow(currentRow)
         return await this.helperService.displayEdit(dataRow)
    }


}


let actions = {
    "inputs": new InputsAction(containerRequests, containerHelpers),
    "buttons": new ButtonsAction(containerRequests,containerHelpers)
}


export {
    actions
}
