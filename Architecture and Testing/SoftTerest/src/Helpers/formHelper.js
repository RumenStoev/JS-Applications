class FormFunctionality {
    constructor(formTag) {
        this.formTag = formTag;
        this.formData = ""
    }

    getDataForm() {
        const dataForm = [...new FormData(this.formTag).entries()]

        this.formData = dataForm;

        return this;
    }

    checkIsEmptyForm() {

        (this.formData.every((input, index, arr) => arr[index][1] !== "")) ? this.formData : this.throwFormError(_, "Fill the Form")

        return this;
    }
    validations() {
        return {
            "email": (email) => email.length >= 3,
            "password": (password) => password.length >= 3,
            "repeatPassword": (password, repeatedPassword) => password === repeatedPassword
        }
    }
    checkValidations(validationsFn) {
        this.formData.forEach((field, i, arr) => {
            let [key, value] = field
            let password = arr[1][1]

            if (!this.validations()[key](value, password)) {
                this.clearAllInputs()
                this.throwFormError(key, `Fill correct the Form ${key}`)
            }
        })

        return this;
        
    }
    testCheckValidations(validationFn) {
        this.formData.forEach((field, i, arr) => {
            let [key, value] = field
            let password = arr[1][1]
   console.log(this.formData)
            if (!validationFn()[key](value, password)) {
                this.clearAllInputs()
                this.throwFormError(key, `Fill correct the Form ${key}`)
            }
        })

        return this;

    }

    formDataToObject() {
        return Object.fromEntries(this.formData)
    }


    throwFormError(data, message) {
        throw new Error(`Form Error ${data} -> ${message}`)
    }

    clearAllInputs() {

        [...this.formTag.elements].forEach(item => item.value = "")

        return this;
    }

}



let createPageValidation = () => {
    return {
        "title": (email) => email.length >= 6,
        "description": (password) => password.length >= 10,
        "imageURL": (img) => img.length >= 5
    }
}





export { FormFunctionality ,createPageValidation }