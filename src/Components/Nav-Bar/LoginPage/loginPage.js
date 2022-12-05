import { isValidForm } from "../../../Utils/filters.js"
import { loginUser } from "../../../Utils/requests.js"
import { redirectToHomePage } from "../../HomePage/homePage.js"

let loginForm = document.getElementById("login-form")

//⦁	Keep the user data in the browser's session or local storage. 
//  SessionStotage state!

async function loginUserProcess() {
    
    return await isValidForm(loginForm,undefined,"Has an Error!!!")       
                            .then(loginUser)
                            .then(x => x.json())
                            .then(x => redirectToHomePage(x.email))
                            //.then(redirectToHomePage)
                            .catch(err => console.error(err))
}

                




export { loginUserProcess }