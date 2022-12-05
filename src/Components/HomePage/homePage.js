let homeSection = document.getElementById("home-page");
let welcomeMsg = document.getElementById("welcome-msg")

function redirectToHomePage(data) {
     
      
     
       window.location.replace("http://localhost:4000/")
       console.log(sessionStorage.getItem("data"))
}


export {
    redirectToHomePage
}