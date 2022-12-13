import { registerTemplate } from "./Components/Nav-Bar/RegisterPage/registerView.js"
import { homeTemplate } from "./Components/HomePage/homeView.js";


const router = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {    
    "/":homeTemplate,
    "/home": "../app.html",
    "/register": registerTemplate ,
    "/login": "",
    "/logout": ""
};
const handleLocation = async() => { 
    const path = window.location.pathname;
        
    const route = routes[path] || routes[404];
     if(route && route !== "/") {
      // const html = await fetch(route).then(x => x.text())//Fragment
    
        document.getElementById("spa-page").innerHTML = routes[path]()
     }
  
     if(route === "/") {
        console.log("The url is",window.location.href)
        document.getElementById("main-page").innerHTML = routes[path]
     }
};

window.addEventListener("popstate",router)

window.addEventListener('load', router);


export { router }