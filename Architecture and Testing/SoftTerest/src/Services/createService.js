import { DashboardPage } from "../BuiltPages/DashboardPage.js";
import { reditectTo } from "../EngineApp/RouterEngine.js";
import { FormFunctionality, createPageValidation } from "../Helpers/formHelper.js";
import { createIdea } from "../Helpers/requests.js";


async function CreateIdeas(target) {
   let formTag = target;

   let formData = new FormFunctionality(formTag)
                                  .getDataForm()
                                  .testCheckValidations(createPageValidation)
                                  .formDataToObject()

   const { title: title,
           description: description,
           imageURL: img } = formData

   let requestStatus = await createIdea({ title, description, img })


   return (requestStatus === 200) ? reditectTo("/dashboard", DashboardPage()) : console.error("Cannot create Idea")
}



export { CreateIdeas }
