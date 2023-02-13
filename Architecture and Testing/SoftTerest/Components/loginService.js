import { FormFunctionality } from "../Helpers/formHelper.js";
import { loginUser } from "../Helpers/requests.js";
import { reditectTo } from "../EngineApp/RouterEngine.js";
import { homePageView } from "../Views/HomePageView.js";

async function LoginUser(target) {
   let formTag = target.parentNode.parentNode

   let formData = new FormFunctionality(formTag)
                                  .getDataForm()
                                  .checkIsEmptyForm()
                                  .formDataToObject()

   let request = loginUser(formData)
                     .then(new FormFunctionality(formTag).clearAllInputs())
                     .catch(console.error)
      
   return (await request === 200) ? reditectTo("/",homePageView) : new Error("Has an Error")
    
}





export { LoginUser }
