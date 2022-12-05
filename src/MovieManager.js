import { registerUserProcess } from "./Components/Nav-Bar/RegisterPage/registerPage.js"
import { loginUserProcess } from "./Components/Nav-Bar/LoginPage/loginPage.js"
import { router } from "./Utils/router.js"

// let applicationSections = document.querySelector("#container")

// let sections = Array.from(applicationSections.children)

// for(let i = 2; i < sections.length - 1; i++) {
//      sections[i].style.display = "none"
// }

//Document.Fragment -> one container for all html elements
//SPA app - one root -> example:<div id="main">

document.addEventListener("click",(e) => {
     e.preventDefault()
      
      let currentForm = e.target.parentNode.id
     
      formsById[currentForm](e,currentForm)//currentFormId
     
})



let formsById = { //More Readable option to change the DOM (logic(state))
    "form-sign-up":async() => await registerUserProcess(),
    "form-login": async () => await loginUserProcess(),
    "edit-movie":() => {},
    "add-movie":() => {},
    "register":(e,path) => router(),
    "login":() => console.log("login"),
    "logout":() => console.log("logout"),
    "delete":() => console.log("delete")
    
}