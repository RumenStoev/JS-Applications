import { registerUserProcess } from "./Components/Nav-Bar/RegisterPage/registerDataProcess.js"
import { loginUserProcess } from "./Components/Nav-Bar/LoginPage/loginPage.js"
import { router } from "./Router.js"


document.addEventListener("DOMContentLoaded",(e) => {

  document.addEventListener("click",(e) => {
     e.preventDefault()
       
     let currentForm = e.target.parentElement.id
      
     if(formsById.hasOwnProperty(currentForm)) {
            formsById[currentForm]()
      }

  })

  router()

})

let formsById = { 
    "register-form":async() => await registerUserProcess(),
    "form-login": async () => await loginUserProcess(),
    "edit-movie":() => {},
    "add-movie":() => {},
    "register":(e,path) => router(),
    "login":() => console.log("login"),
    "logout":() => console.log("logout"),
    "delete":() => console.log("delete")   
}




