import { DashboardPage } from "../BuiltPages/DashboardPage.js";
import { reditectTo } from "../EngineApp/RouterEngine.js";
import { deleteIdea } from "../Helpers/requests.js";



async function DeleteIdea(target) {
     let idIdea = target.parentNode.id;

     let requestStatus =  await deleteIdea(idIdea)


     return (requestStatus === 200) ? reditectTo("/dashboard", DashboardPage()) : console.error("You cannot delete this Idea ")
}




export { DeleteIdea }