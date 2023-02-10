import { RouterWay } from "./RouterEngine.js";
import { homePageView } from "../Views/HomePageView.js";
import { registrationView } from "../Views/RegistrationView.js";
import { loginView } from "../Views/loginPageView.js";


export const routerPaths = {};


RouterWay("/", homePageView)

RouterWay("/register", registrationView)

RouterWay("/login", loginView)

