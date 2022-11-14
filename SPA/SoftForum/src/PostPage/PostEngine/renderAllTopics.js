import { getPosts } from "./postHelpers/postRequests.js";
import { topicTemplate } from "./postHelpers/postTemplates.js";
import { renderAllTopics,isValidJSON} from "./postHelpers/postFilters.js";




async function RenderTopics() {
     return await getPosts()
                      .then(data => renderAllTopics(data,topicTemplate))
                      .catch(e => console.error(e))
}



export { RenderTopics }