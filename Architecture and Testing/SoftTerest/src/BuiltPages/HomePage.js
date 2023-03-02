import { TemplateBuilder } from "../EngineApp/TemplateBuilder.js"
import { navBar, isLoggedInView, isNotLoggedInView, homeContainerWrapper, footer } from "../Views/HomePageView.js"
import { displayPage } from "../EngineApp/displayDOM.js"
import { checkLoggedInUser } from "../Helpers/homeHelper.js"


async function HomePage() {
    let navBarLinks = checkLoggedInUser() ? isLoggedInView() : isNotLoggedInView()

    let assembleHomePage = new TemplateBuilder()
        .addHTMLElement(navBar(navBarLinks))
        .addHTMLElement(homeContainerWrapper())
        .addHTMLElement(footer())
        .buildPage()

    return displayPage(assembleHomePage)
}




export { HomePage }