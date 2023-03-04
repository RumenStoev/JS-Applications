
import { displayPage } from "./displayDOM.js";


export const routerPaths = {};

const Router = (event) => {

    event = event || window.event;
    
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    findLocation(event);
};

const findLocation = (event) => {

    event.preventDefault()

    const path = window.location.pathname;

    const route = routerPaths[path] || pageNotFound

    displayPage(route())

};


let pageNotFound = () => `<h1> The page Not Found! </h1>`

function RouterWay(path, cbTemplate) {
    routerPaths[path] = cbTemplate

}

function reditectTo(path, cbTemplate) {
    window.history.replaceState({}, "", path)

    displayPage(cbTemplate)
}


window.addEventListener("popstate", findLocation);
window.addEventListener("load", Router)
window.addEventListener("click", Router)


export { Router, RouterWay, reditectTo }
