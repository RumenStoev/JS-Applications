import { registerTemplate } from "./Components/Nav-Bar/RegisterPage/registerView.js"
import { homeTemplate } from "./Components/HomePage/homeView.js";
import { loginTemplate } from "./Components/Nav-Bar/LoginPage/loginView.js";
import { displayPage } from "./Utils/filters.js";
import { editTemplate } from "./Components/HomePage/EditMoviePage/editView.js";


const router = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": homeTemplate,
    "/home": "../app.html",
    "/register": registerTemplate,
    "/login": loginTemplate,
    "/logout": "",
    "/edit": editTemplate
};

const handleLocation = async () => {

    const path = window.location.pathname;

    const route = routes[path] || routes[404];

    displayPage(route())


};

window.addEventListener("popstate", router)


export { router }
