import { displayPage } from "../EngineApp/displayDOM.js"
import { TemplateBuilder } from "../EngineApp/TemplateBuilder.js";
import { navBarDashboardView } from "../Views/DashBoardView.js";
import { takeAllIdeas } from "../Services/dashboardService.js";


async function DashboardPage() {


    let DashboardPage = new TemplateBuilder()
                            .addHTMLElement(navBarDashboardView(await takeAllIdeas()))
                            .buildPage()

    return displayPage(DashboardPage)
   

}


export { DashboardPage }
