import { createPageView } from "../Views/CreatePageView.js";
import { displayPage } from "../EngineApp/displayDOM.js";




async function CreateIdeaPage() {
    return displayPage(createPageView())
}




export { CreateIdeaPage }
