import { homePageView } from "../Views/HomePageView.js";
import { registrationView } from "../Views/RegistrationView.js";
import { loginView } from "../Views/loginPageView.js";
import { RouterWay } from "./RouterConfig.js";

const routerPaths = {};



RouterWay("/", homePageView)

RouterWay("/register", registrationView)

RouterWay("/login", loginView)







export { routerPaths }