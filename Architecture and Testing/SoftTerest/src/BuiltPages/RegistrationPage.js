import { registrationView } from "../Views/RegistrationView.js";
import { displayPage } from "../EngineApp/displayDOM.js";





async function RegistrationPage() {
    return displayPage(registrationView())
}





export { RegistrationPage }