import { getSelectedPost } from "./requests.js"
import { takeSelectedTopic } from "./filters.js"
import { commentTemplate } from "./templates.js"

let addEventEachTopic = async() => await [...document.querySelectorAll(".topic-container")].forEach(topic => {
    
  topic.addEventListener("click",async (e) => {
      e.preventDefault()
   
     let currentTopic = e.target.textContent

       return await getSelectedPost()
                        .then(data => takeSelectedTopic(data,currentTopic))
                        .then(commentTemplate)
     
    })
})


export { addEventEachTopic }