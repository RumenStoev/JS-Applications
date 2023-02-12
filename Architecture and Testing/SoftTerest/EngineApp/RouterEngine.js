import { displayPage } from "./displayDOM.js";
import { routerPaths } from "./RouterWays.js";

const Router = (event) => {

    event = event || window.event;

    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    findLocation();
};

const findLocation = () => {

    const path = window.location.pathname;

    const route = routerPaths[path] || pageNotFound

    displayPage(route())

};


let pageNotFound = () => `<h1> The page Not Found! </h1>`

 function RouterWay(path, cbTemplate) {
    routerPaths[path] = cbTemplate
  }

 function navigationLinks(event) {
    if (event.target.href) Router()
 }

 function reditectTo(path,cbTemplate) {
     window.history.replaceState({},"",path)
     displayPage(cbTemplate())
 }


window.addEventListener("popstate", Router);
window.addEventListener("load", Router)
window.addEventListener("click", navigationLinks)


export { Router, RouterWay,reditectTo }
