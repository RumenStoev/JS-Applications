import { RegisterUser } from "../Services/registerService.js"
import { LoginUser } from "../Services/loginService.js"
import { LogoutUser } from "../Services/logoutService.js"
import { CreateIdeas } from "../Services/createService.js"
import { showIdeaDetails } from "../Services/ideaDetailsService.js"
import { DeleteIdea } from "../Services/deleteIdeaService.js"
import { DashboardPage } from "../BuiltPages/DashboardPage.js"

function ClickedEvent() {

    return {
        "Logout": () => LogoutUser(),
        "Dashboard": () => DashboardPage(),
        "Details": (_event) => showIdeaDetails(_event),
        "Delete": (_event) => DeleteIdea(_event)
    }

}


function SubmitEvent() {
    return {
        "Sign Up": (_event) => RegisterUser(_event),
        "Sign In": (_event) => LoginUser(_event),
        "Create": (_event) => CreateIdeas(_event)
    }
}




export { ClickedEvent, SubmitEvent }
