import { createTable, tBodyTemplate } from "./templates.js";
import { containerRequests } from "./requests.js";

class HelperFunctionality {
    constructor() { }

    async form() {
        return {
            "getDataForm": async () => {
                let data = Object.fromEntries([...new FormData(form).entries()]);

                return data;
            },
            "checkIsEmptyForm": async (input) => {
                if (input === "") throw new Error("The inputs are empty!")
            }
        }
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
        Object.values(data).forEach(data => rows += tBodyTemplate({ ...data }))
        return rows
    }

    async displayStateDOM(data) {
        document.body.innerHTML = data
    }


}


let containerHelpers = new HelperFunctionality()


export {
    containerHelpers
}





