import { displayDOMState } from "./displayStateDOM.js";


const routerPaths = {}


const Router = (event) => {

    event = event || window.event;

    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    findLocation(event);
};

const findLocation = (event) => {

    event = event || window.event

    event.preventDefault()

    const path = window.location.pathname;

    const route = routerPaths[path] || pageNotFound

    displayDOMState(route)

};


let pageNotFound = () => `<h1> The page Not Found! </h1>`


async function RouterWay(path, cbTemplate) {
    routerPaths[path] = cbTemplate

}


let navigationHref = (event) => (event.target.href) ? Router(event) : null


function reditectTo(path, cbTemplate) {
    window.history.replaceState({}, "", path)

    if (routerPaths[path]) {
        displayDOMState(cbTemplate)
    }
}


window.addEventListener("popstate", findLocation);
window.addEventListener("load", Router)
window.addEventListener('click', navigationHref)






export { RouterWay, Router, reditectTo }