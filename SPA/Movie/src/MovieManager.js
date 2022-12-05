import { registerUserProcess } from "./Components/Nav-Bar/RegisterPage/registerPage.js"
import { loginUserProcess } from "./Components/Nav-Bar/LoginPage/loginPage.js"



document.addEventListener("click",(e) => {
     e.preventDefault()
      
      let currentForm = e.target.parentNode.id
     
      formsById[currentForm](e,currentForm)
     
})



let formsById = { 
    "form-sign-up":async() => await registerUserProcess(),
    "form-login": async () => await loginUserProcess(),
    "edit-movie":() => {},
    "add-movie":() => {},
    "register":(e,path) => router(),
    "login":() => console.log("login"),
    "logout":() => console.log("logout"),
    "delete":() => console.log("delete")
    
}
