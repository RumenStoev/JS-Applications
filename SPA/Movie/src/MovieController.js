import { registerUserProcess } from "./Components/Nav-Bar/RegisterPage/registerDataProcess.js"
import { loginUserProcess } from "./Components/Nav-Bar/LoginPage/loginPage.js"
import { redirectToHomePage } from "./Utils/filters.js"
import { router } from "./Router.js"


document.addEventListener("DOMContentLoaded",(e) => {

  document.addEventListener("click",(e) => {
     e.preventDefault()
       
     let currentForm = e.target.parentElement.id

     if(formsById.hasOwnProperty(currentForm)) {
            formsById[currentForm]()
      }

     if(anchorLinks.hasOwnProperty(e.target.id)) {
      anchorLinks[e.target.id]()
     } 

  })

  router()

})

let formsById = { 
    "register-form":async() => await registerUserProcess(),
    "login-form": async () => await loginUserProcess(),
    "edit-movie":() => {},
    "add-movie":() => {},
    "register":() => router(),
    "login":() => router() ,
    "logout":() => console.log("logout"),
    "delete":() => console.log("delete"),
    
}
 
let anchorLinks = {
  "header-nav-bar": redirectToHomePage
}




