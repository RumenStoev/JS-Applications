import { reditectTo } from "../EngineApp/RouterEngine.js";
import { logoutUser } from "../Helpers/requests.js";
import { HomePage } from "../BuiltPages/HomePage.js";



async function LogoutUser() {

    let requestStatus = await logoutUser()

    return (requestStatus === 200 || requestStatus === 204) ? reditectTo('/', HomePage()) : console.error("Logout Service Error!")

}








export { LogoutUser }