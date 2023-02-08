import { displayPage } from "./displayDOM.js";
import { routerPaths } from "./RouterWay.js";

const Router = (event) => {

    event = event || window.event;

    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    handleLocation();
};

const handleLocation = () => {

    const path = window.location.pathname;

    const route = routerPaths[path] || pageNotFound

    displayPage(route())

};

function RouterWay(path, cbTemplate) {
    routerPaths[path] = cbTemplate
}

let pageNotFound = () => `<h1> The page Not Found! </h1>`



 window.addEventListener("popstate", Router);
 window.addEventListener("load", Router)



export { Router, RouterWay }
