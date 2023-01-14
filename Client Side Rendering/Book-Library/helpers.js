import { containerTemplates } from "./templates.js";
import { containerRequests } from "./requests.js";


class HelperFunctionality {
    constructor(serviceRequest, serviceTemplate) {
        this.serviceRequest = serviceRequest
        this.serviceTemplate = serviceTemplate
    }

    form() {
        return {

            "getDataForm": function (tagForm) {
                const dataForm = [...new FormData(tagForm).entries()]

                
                return (this.checkIsEmptyForm(dataForm)) ? Object.fromEntries(dataForm) : this.throwErrorForm("Empty Field/s!!!")


            },
            "checkIsEmptyForm": function (dataArrayForm) {

                return dataArrayForm.every((input, index, arr) => arr[index][1] !== "")
            },

            "throwErrorForm": function (msg) {

                throw new Error(`${msg}`)
            }
        }
    }

    table() {
        return {
            "getDataRow": (target) => {
                let currentRow = target.parentNode.parentNode;

                let [author, title] = Array.from(currentRow.children)
                let id = currentRow.id;
            

                return { author: author.textContent, title: title.textContent, id: id }
            },

            "renderRow":  (data) => {
                let rows = ""

                Object.entries(data).forEach(([id, { author, title }]) => rows += this.serviceTemplate.tBodyTemplate({ author, title, id }))

                return  rows
            },



            "getStudentID": (targetTag) => {
                let idStudent = targetTag.parentNode.parentNode.id;
                return idStudent

            }
        }


    }

    displayStateDOM() {
        return {
            "displayFragment": (data) => {
                let fragmentDOM = document.createDocumentFragment()
                fragmentDOM.innerHTML = data
                document.body.innerHTML = fragmentDOM.innerHTML
            },


            "displayTable": async () => {
                return await this.serviceRequest
                    .getAllBooks()
                    .then(this.table().renderRow)
                    .then(this.serviceTemplate.createTable)
                    .catch(console.error)
            },

            "displayEdit": ({ author, title, id }) => {

                let formTarget = document.getElementById("add-form");
                formTarget.innerHTML = this.serviceTemplate.editFormTemplate({ author, title, id })
            }
        }
    }

}


let containerHelpers = new HelperFunctionality(containerRequests, containerTemplates)

export {
    containerHelpers
}








