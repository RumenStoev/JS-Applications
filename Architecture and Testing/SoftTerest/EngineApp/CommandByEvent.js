import { RegisterUser } from "../Components/registerService.js"

function ClickedEventByText() {
    
    return {
        "Sign Up": (_event) => RegisterUser(_event)
    }

}


function SubmitEvent(event) {

}


export { ClickedEventByText }











