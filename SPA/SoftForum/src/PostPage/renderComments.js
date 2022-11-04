import { getPosts } from "../requests.js";
import { topicTemplate } from "../templates.js";
import { getAllTopics, renderAllTopics } from "../filters.js";



async function RenderComments() {
     return await getPosts()
                     .then(getAllTopics)
                     .then(data => renderAllTopics(data,topicTemplate))
                     .catch(err => console.err(err))
                     
}



export { RenderComments }