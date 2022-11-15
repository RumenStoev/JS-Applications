import { PostForm } from "./PostEngine/postForm.js";
import { RenderTopics } from "./PostEngine/renderAllTopics.js";

class PostPage {

    constructor(clickedTarget) {
        this.clickedTarget = clickedTarget
    }

    async postForm() {
        return await PostForm(this.clickedTarget)
    }

    async renderAllTopics() {
        return await RenderTopics()
    }

}


export { PostPage }
