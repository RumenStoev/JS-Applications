import { clickEvent, submitEvent } from "./ControllerEvents.js";
import { RouterWay } from "./EngineApp/RouterEngine.js";
import { renderHomePage } from "./Pages/homePage.js";
import { loginPageView } from "./Views/LoginView.js";
import { registerPageView } from "./Views/RegisterView.js";


document.addEventListener("DOMContentLoaded", () => {


  RouterWay("/", renderHomePage)
  RouterWay('/register', registerPageView)
  RouterWay("/login", loginPageView)


  document.addEventListener("submit", (event) => {
    event.preventDefault()

    if (submitEvent()[event.submitter.value]) submitEvent()[event.submitter.value](event.target)
  })

  document.addEventListener("click", (event) => {

    if (clickEvent()[event.target.textContent]) clickEvent()[event.target.textContent]()
  })

})


