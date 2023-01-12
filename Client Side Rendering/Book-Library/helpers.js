import { createTable, tBodyTemplate, editFormTemplate } from "./templates.js";
import { containerRequests } from "./requests.js";


class HelperFunctionality {


    form() {
        return {

            "getDataForm": function (tagForm) {
                const dataForm = [...new FormData(tagForm).entries()]

                console.log(dataForm)
                return (this.checkIsEmptyForm(dataForm)) ? Object.fromEntries(dataForm) : this.throwErrorForm("Has empty field!!!")


            },
            "checkIsEmptyForm": function (dataArrayForm) {

                return dataArrayForm.every((input, index, arr) => arr[index][1] !== "")
            },

            "throwErrorForm": function (msg) {

                throw new Error(`${msg}`)
            }
        }
    }

    getDataRow(target) {
        console.log("Target is", target)
        let currentRow = target.parentNode.parentNode;

        let [author, title] = Array.from(currentRow.children)
        let id = currentRow.id;
        console.log(author)

        return { author: author.textContent, title: title.textContent, id: id }
    }

    async renderTable() {
        return await containerRequests
            .getAllBooks()
            .then(this.renderRow)
            .then(createTable)
            .catch(console.error)
    }

    async renderRow(data) {
        let rows = ""
        
        Object.entries(data).forEach(([id, { author, title }]) => rows += tBodyTemplate({ author, title, id }))

        return rows


    }

    displayEdit({ author, title, id }) {

        let formTarget = document.getElementById("add-form");
        formTarget.innerHTML = editFormTemplate({ author, title, id })
    }

    async displayStateDOM(data) {
        document.body.innerHTML = data
    }


}


let containerHelpers = new HelperFunctionality()

export {
    containerHelpers
}




