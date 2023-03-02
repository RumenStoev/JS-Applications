import { FormFunctionality } from "../Helpers/formHelper.js"
import { registerUser } from "../Helpers/requests.js"
import { reditectTo } from "../EngineApp/RouterEngine.js"
import { HomePage } from "../BuiltPages/HomePage.js"



async function RegisterUser(target) {

     let formTag = target


     let dataForm = new FormFunctionality(formTag)
          .getDataForm()
          .checkValidations()
          .formDataToObject()

     return await registerUser(dataForm)
          .then(reditectTo("/", HomePage()))
          .catch(console.error)
}




export { RegisterUser }
