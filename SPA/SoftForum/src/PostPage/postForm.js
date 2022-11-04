import { takePostFormData, clearInputFields, takeLastTopic } from "../filters.js"
import { sendPost,getPosts } from "../requests.js"
import { topicTemplate } from "../templates.js";

let postForm = document.querySelector("body > div > main > div.new-topic-border > form");
let fieldForm = document.querySelectorAll("#topicName, #username, #postText")
let postButton = document.querySelector(".public");
let cancelButton = document.querySelector(".cancel");








async function PostForm() {

    postButton.addEventListener("click",(e) => {
        e.preventDefault();
        let formData = takePostFormData(postForm)
                       
          sendPost(formData)
                    .then(getPosts)
                    .then(takeLastTopic)
                    .then(topicTemplate)
                    .catch(err => console.error(err))
         

    })

    cancelButton.addEventListener("click",(e) => {
        e.preventDefault()
        clearInputFields(fieldForm)
    })
}






export { PostForm }
