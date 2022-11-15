import { getDataForm, clearInputFields } from "./postHelpers/postFilters.js"
import { sendPost } from "./postHelpers/postRequests.js"
import { topicTemplate } from "./postHelpers/postTemplates.js";



let postForm = document.getElementById("postForm")
let fieldsForm = document.querySelectorAll("#topicName, #username, #postText")



async function PostForm(clickedButton) {
     if(clickedButton === "public") return await btnPost()
     
     if(clickedButton === "cancel") return await btnCancel()

}

async function btnPost() {
    return await getDataForm(postForm)
                       .then(data => {
                          topicTemplate(data)
                       return data
                       })
                       .then(sendPost) 
                       .then(clearInputFields(fieldsForm))
}

async function btnCancel() {
      
    return await clearInputFields(fieldsForm)
}




export { PostForm }
