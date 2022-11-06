import { takePostFormData, clearInputFields, takeLastTopic, renderLastTopic } from "./filters.js"
import { sendPost, getPosts } from "./requests.js"
import { topicTemplate } from "./templates.js";

let postForm = document.querySelector("body > div > main > div.new-topic-border > form");
let fieldForm = document.querySelectorAll("#topicName, #username, #postText")
let postButton = document.querySelector(".public");
let cancelButton = document.querySelector(".cancel");



async function PostForm() {

    postButton.addEventListener("click", async (e) => {
        e.preventDefault();
        
        let formData = takePostFormData(postForm)

        return await sendPost(formData)
                           .then(getPosts)
                           .then(takeLastTopic)
                           .then(data => renderLastTopic(data,topicTemplate))
                           .then(clearInputFields(fieldForm))
                           .catch(err => console.error(err))
    })

    cancelButton.addEventListener("click", (e) => {
        e.preventDefault()
        clearInputFields(fieldForm)
    })
}



export { PostForm }