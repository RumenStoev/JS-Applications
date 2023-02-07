class Helper {

    form() {
        return {

            "getDataForm": function (formTag) {
                const dataForm = [...new FormData(formTag).entries()]

                console.log({ ...dataForm })

            },
            "checkIsEmptyForm": function (formData) {

                return formData.every((input, index, arr) => arr[index][1] !== "")
            }
        }
    }

    validations() {
        return {
            "email": (email) => string >= 3,
            "password": (password) => string >= 3,
            "checkRepeadedPassword": (password, repeatedPassword) => password === repeatedPassword
        }
    }


}


let helperFunctions = new Helper()

export { helperFunctions }
