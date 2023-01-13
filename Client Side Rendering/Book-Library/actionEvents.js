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

    async saveUpdateBook(currentForm, target) {
        let idStudent = target.id

        let editFormData = await this.helperService.form().getDataForm(currentForm)
        return await containerRequests
            .updateBook(editFormData, idStudent)
            .catch(console.error)
    }
}



class ButtonsAction {
    constructor(serviceRequest, serviceHelper) {
        this.serviceRequest = serviceRequest;
        this.serviceHelper = serviceHelper;
    }

    async allBooksLoad() {
        
        return this.serviceHelper
            .displayStateDOM()
            .displayFragment(await this.serviceHelper.displayStateDOM().displayTable())
    }

    async displayEditForm(currentRow) {
        
        let dataRow = this.serviceHelper.table().getDataRow(currentRow);
        return this.serviceHelper.displayStateDOM().displayEdit(dataRow)
    }

    async deleteBook(target) {
        let id = this.serviceHelper.table().getStudentID(target)
     
        return await containerRequests
            .deleteBook(id)
            .catch(console.error)
    }


}


let actions = {
    "inputs": new InputsAction(containerRequests, containerHelpers),
    "buttons": new ButtonsAction(containerRequests, containerHelpers)
}


export {
    actions
}
