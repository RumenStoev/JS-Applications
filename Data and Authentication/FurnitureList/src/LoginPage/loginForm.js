import { checkEmptyInput, takeDataForm } from "./filters.js"
import { sendRegisterData } from "./requests.js";

let loginForm = document.getElementById("login");
let loginButton = document.querySelector("#login > button")


function redirectToHomePage() {
  return window.location.href = "http://localhost:4000/homeLogged.html"
}


async function btnLogin(event) {
  
  event.preventDefault();
  
     let dataLogin = takeDataForm(loginForm)
 
      if(checkEmptyInput(loginForm)) {

         return await sendRegisterData("login",dataLogin,redirectToHomePage)
                                                           
      }

      else {
        throw new Error("There isn't such user!")
      }
}


  loginButton.addEventListener("click", await btnLogin)



 export { loginButton }  



