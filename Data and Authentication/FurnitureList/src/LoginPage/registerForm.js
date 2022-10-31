import { sendRegisterData } from "./requests.js";
import { isEqualPasswordsRegister, takeDataForm } from "./filters.js"

let registerForm = document.querySelector("#register")
let registerButton = document.querySelector("#register > button");



 function btnRegister(event) {
   event.preventDefault();
        
    if(isEqualPasswordsRegister(registerForm)) {
         console.log("Click")
        return  sendRegisterData("register",takeDataForm(registerForm))

    }else {
        
        throw new Error("Empty form!")
    }  
   
 }


    registerButton.addEventListener("click",btnRegister)



 export { registerButton }


