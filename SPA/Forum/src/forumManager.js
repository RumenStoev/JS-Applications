import { PostPage } from "./PostPage/PostManager.js"

 new PostPage().renderAllTopics()

  document.addEventListener("click", async (e) => {
     e.preventDefault()

    let currentTarget = e.target.className;

    if (currentTarget === "public" || currentTarget === "cancel") {
        return await new PostPage(currentTarget).postForm()
    }
      
})





