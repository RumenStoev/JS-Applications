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

    const route = routerPaths[path] || routerPaths[404];

    displayPage(route())

};

function RouterWay(path, cbTemplate) {
    routerPaths[path] = cbTemplate
}




 window.addEventListener("popstate", Router);




export { Router, RouterWay }
