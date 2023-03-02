import { FormFunctionality } from "../Helpers/formHelper.js";
import { loginUser } from "../Helpers/requests.js";
import { reditectTo } from "../EngineApp/RouterEngine.js";
import { HomePage } from "../BuiltPages/HomePage.js";

async function LoginUser(target) {
   let formTag = target

   let formData = new FormFunctionality(formTag)
                                  .getDataForm()
                                  .checkIsEmptyForm()
                                  .formDataToObject()

   let requestStatus = loginUser(formData)
                           .then(new FormFunctionality(formTag).clearAllInputs())
                           .catch(console.error)
      
   return (await requestStatus === 200) ? reditectTo("/",HomePage()) : console.error("No such User")
    
}





export { LoginUser }