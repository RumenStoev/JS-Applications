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

        (this.formData.every((input, index, arr) => arr[index][1] !== "")) ? this.formData : this.throwFormError(_,"Fill the Form")

        return this;
    }
    validations() {
        return {
            "email": (email) => email.length >= 3,
            "password": (password) => password.length >= 3,
            "repeatPassword": (password, repeatedPassword) => password === repeatedPassword
        }
    }
    checkValidations() {
      this.formData.forEach((field, i, arr) => {
            let [key, value] = field
            let password = arr[1][1]

            if (!this.validations()[key](value, password)) this.throwFormError(key,`Fill correct the Form ${key}`)
        })
        
         return this;
    }
     
       formDataToObject() {
         return Object.fromEntries(this.formData)
     }

     
     throwFormError(data,message) {
        throw new Error(`Form Error ${data} -> ${message}`)
     }
}




export { FormFunctionality }
