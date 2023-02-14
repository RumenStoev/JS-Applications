import { FormFunctionality } from "../Helpers/formHelper.js"
import { sendData } from "../Helpers/requests.js"
import { reditectTo } from "../EngineApp/RouterEngine.js"
import { homePageView } from "../Views/HomePageView.js"



async function RegisterUser(target) {
     let formTag = target
     
     let dataForm = new FormFunctionality(formTag)
                                        .getDataForm()
                                        .checkValidations()
                                        .formDataToObject()

     return await sendData(dataForm)
                     .then(reditectTo("/",homePageView))
                     .catch(console.error)
}




export { RegisterUser }
