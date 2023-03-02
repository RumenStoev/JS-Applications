import { loginView } from "../Views/LoginPageView.js";
import { displayPage } from "../EngineApp/displayDOM.js";



async function LoginPage() {
    return displayPage(loginView())
}





export { LoginPage }