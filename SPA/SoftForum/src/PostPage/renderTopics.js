import { getPosts } from "./requests.js";
import { topicTemplate } from "./templates.js";
import { renderAllTopics } from "./filters.js";
import { addEventEachTopic } from "../../CommentPage/comments.js";



async function RenderTopics() {
     return await getPosts()
                     .then(getPosts)
                     .then(data => renderAllTopics(data,topicTemplate))
                     .then(addEventEachTopic)
                     .catch(err => console.error(err))
}



export { RenderTopics }