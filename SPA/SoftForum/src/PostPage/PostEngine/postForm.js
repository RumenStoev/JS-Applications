import { getDataForm, clearInputFields } from "./postHelpers/postFilters.js"
import { sendPost } from "./postHelpers/postRequests.js"
import { topicTemplate } from "./postHelpers/postTemplates.js";


let postForm = document.getElementById("postForm")
let fieldsForm = document.querySelectorAll("#topicName, #username, #postText")
let postButton = document.querySelector(".public");
let cancelButton = document.querySelector(".cancel");



async function PostForm() {
 
    document.addEventListener("click",async(e) => {
        e.preventDefault()
        let currButton = e.target.className;
   
        if(typeof casePostPage[currButton] === "function" ) { 
            casePostPage[currButton]()
        }
       
        
    })
}

let casePostPage = {
    "cancel":  await btnCancel,
    "public":  await btnPost
}

async function btnPost() {
    return await getDataForm(postForm)
                    .then(topicTemplate)
                    .then(sendPost)
                    .then(clearInputFields(fieldsForm))
    
}


async function btnCancel() {
      
    return await clearInputFields(fieldsForm)
}




export { PostForm }