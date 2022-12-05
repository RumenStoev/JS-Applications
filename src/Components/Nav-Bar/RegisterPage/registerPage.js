import { getDataForm, isValidForm,sessionStorageData } from "../../../Utils/filters.js"
import { registerUser,loginUser } from "../../../Utils/requests.js";
import { redirectToHomePage } from "../../HomePage/homePage.js";
let registerForm = document.getElementById("register-form")

//⦁	Keep the user data in the browser's session or local storage. 
//  SessionStotage state!


async function registerUserProcess() {
    
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