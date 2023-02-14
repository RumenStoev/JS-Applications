import { RegisterUser } from "../Components/registerService.js"
import { LoginUser } from "../Components/loginService.js"

function ClickedEventByText() {

    return {
        
    }

}


function SubmitEvent() {
    return {
        "Sign Up": (_event) => RegisterUser(_event),
        "Sign In": (_event) => LoginUser(_event)
    }
}




export { ClickedEventByText, SubmitEvent }







