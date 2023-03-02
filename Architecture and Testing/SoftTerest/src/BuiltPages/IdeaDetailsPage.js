import { TemplateBuilder } from "../EngineApp/TemplateBuilder.js"
import { displayPage } from "../EngineApp/displayDOM.js"



async function IdeaDetailPage(ideas) {

    let ideaDetailView = new TemplateBuilder()
        .addHTMLElement(ideas)
        .buildPage();

    return displayPage(ideaDetailView)
}




export { IdeaDetailPage }