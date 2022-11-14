import { PostForm } from "./PostEngine/postForm.js";
import { RenderTopics } from "./PostEngine/renderAllTopics.js";




async function PostPage() {
    await RenderTopics()
    await PostForm()
}



export { PostPage }
