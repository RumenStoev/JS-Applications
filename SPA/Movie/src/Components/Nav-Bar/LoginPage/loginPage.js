import { loginUser } from "../../../Utils/requests.js"
import { getDataForm,redirectToHomePage } from "../../../Utils/filters.js"

async function loginUserProcess() {
    const loginForm = document.getElementById("login-form")

        return await getDataForm(loginForm)
                     .then(loginUser)
                     .then(redirectToHomePage)
                     .catch(e => console.error(e))
}

                




export { loginUserProcess }
