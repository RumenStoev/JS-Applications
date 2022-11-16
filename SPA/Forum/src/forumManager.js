import { PostPage } from "./PostPage/PostManager.js"
import { renderTopic, postDataFromForm,renderAllComments } from "./CommentsPage/comments.js"



async function Forum() {

    document.addEventListener("click", async (e) => {
        e.preventDefault()

        let currentButton = e.target.className
        let clickedTopic = e.target.tagName
        
        if (currentButton === "public" || currentButton === "cancel") {
            return await new PostPage(currentButton).postForm()
        }

        if(clickedTopic === "H2") {
             let nameTopic = e.target.textContent

             await renderTopic(nameTopic)
             await renderAllComments()
        }

        if(e.target.tagName === "BUTTON" && e.target.textContent === "Post") {
             return await postDataFromForm(e.target);
        }

    })

    new PostPage().renderAllTopics()
  

}


await Forum()




