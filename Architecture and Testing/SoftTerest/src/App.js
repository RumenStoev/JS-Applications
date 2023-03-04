import { RouterWay } from "./EngineApp/RouterEngine.js";
import { ClickedEvent, SubmitEvent } from "./EngineApp/CommandByEvent.js";
import { DashboardPage } from "./BuiltPages/DashboardPage.js";
import { HomePage } from "./BuiltPages/HomePage.js";
import { CreateIdeaPage } from "./BuiltPages/CreateIdeaPage.js";
import { RegistrationPage } from "./BuiltPages/RegistrationPage.js";
import { LoginPage } from "./BuiltPages/LoginPage.js";
import { showIdeaDetails } from "./Services/ideaDetailsService.js";


document.addEventListener("DOMContentLoaded", async (e) => {

  RouterWay("/", HomePage)

  RouterWay("/logout", HomePage)

  RouterWay("/register", RegistrationPage)

  RouterWay("/login", LoginPage)

  RouterWay("/dashboard", DashboardPage)

  RouterWay('/create', CreateIdeaPage)

  RouterWay(`/details/id`, showIdeaDetails)


  document.addEventListener("submit", (e) => {
    e.preventDefault()

    if (SubmitEvent()[e.submitter.textContent]) SubmitEvent()[e.submitter.textContent](e.target)

  })


  document.addEventListener("click", (e) => {
    if (ClickedEvent()[e.target.textContent]) ClickedEvent()[e.target.textContent](e.target)

  })

})
