import { RouterWay } from "./RouterEngine.js";
import { DashboardPage } from "../BuiltPages/DashboardPage.js";
import { HomePage } from "../BuiltPages/HomePage.js";
import { CreateIdeaPage } from "../BuiltPages/CreateIdeaPage.js";
import { RegistrationPage } from "../BuiltPages/RegistrationPage.js";
import { LoginPage } from "../BuiltPages/LoginPage.js";
import { showIdeaDetails } from "../Services/ideaDetailsService.js";




export const routerPaths = {};


RouterWay("/", HomePage)

RouterWay("/logout", HomePage)

RouterWay("/register", RegistrationPage)

RouterWay("/login", LoginPage)

RouterWay("/dashboard", DashboardPage)

RouterWay('/create', CreateIdeaPage)

RouterWay(`/details/id`,showIdeaDetails)




