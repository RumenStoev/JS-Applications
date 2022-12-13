import { isValidForm, redirectToHomePage } from "../../../Utils/filters.js"
import { registerUser } from "../../../Utils/requests.js";


async function registerUserProcess() {
      
  const registerForm = document.querySelector("#register-form")

    return await isValidForm(registerForm,validRulesForm,"Has an Error!!!")    
                           .then(registerUser)
                           .then(redirectToHomePage)
                           .catch(err => console.error(err))
}

               

let validRulesForm = {
    "email":(value) => value !== "" && value !== undefined,
    "password":(value) => value.length >= 6,
    "repeatPassword":(value,password) => password === value 
}



export { registerUserProcess }
