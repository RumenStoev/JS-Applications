
const router = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    //404: "/pages/404.html",
    "/home": "/index.html",
    "/register": h1,
    "/login": "/login.html",
    "/logout": "/logout.html"
};

const handleLocation = async() => { 
     const path = window.location.pathname;
        
     const route = routes[path] || routes[404];
     
    //const html = await fetch(route).then(x => x.text())//Fragment
  
    document.body.innerHTML = route //DOM State router render

};

 window.onpopstate = handleLocation;

 window.route = router;

export { router }