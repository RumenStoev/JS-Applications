import { getTopics,sendComments,getComments } from "./commentsRequests.js"
import { topicTemplate, postedCommentTemplate } from "./commentsTemplate.js"
import { findCurrentTopic,getDataForm, takeLastPost,allComments } from "./commentsFilters.js"


async function renderTopic(clickedTopic) {
     return await getTopics()
                  .then(data => findCurrentTopic(data,clickedTopic))
                  .then(topicTemplate)
                  .catch(err => console.err(err))

}



async function postDataFromForm(btnPost) {
    btnPost.addEventListener("click",async (e) => {
        e.preventDefault()
        e.stopPropagation()

      let currentFormTag = btnPost.parentElement

      let userFormData =  await getDataForm(currentFormTag)
     

        return await sendComments(userFormData)
                     .then(getComments)
                     .then(takeLastPost)
                     .then(postedCommentTemplate)

             
    })
}


async function renderAllComments() {
       return await getComments()
                      .then(data => allComments(data,postedCommentTemplate))
                      .catch(err => console.error(err))
}




export { renderTopic, postDataFromForm, renderAllComments }
