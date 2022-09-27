let Posts = {}

let takePosts = async(url) => {
 try {
      let response = await fetch(`http://localhost:3030/jsonstore/blog/${url}`)
      let data = await response.json();
       
       return data
   
  } catch(e) {
        throw new Error(e)
    }
}

let takeComments = async() => {
  try {
    
      let response = await fetch(`http://localhost:3030/jsonstore/blog/comments`)
      let data = await response.json()
    
       return data;
    
    } catch(e) {
        throw new Error(e)
    }
}

let appendPostsToSelectTag = async (url,sectionId) => {
   
    return await takePosts(url).then(posts => {
                
        Object.values(posts).forEach(post => {
          let [body,id,title] = Object.values(post)
           Posts[id] = body
           sectionId.innerHTML+=templatePosts(id,title)
        
         });
     })           
}

let appendCommentsToList = async(currentOption,textPosts,listComments) => {
    
    return await takeComments().then(comments => {
       
        Object.values(comments).forEach(comment => {
            let [id,postId,text] = Object.values(comment);
            
            if(postId === currentOption.value) {
                renderPostAndComments(currentOption.text,textPosts[postId])
                listComments.innerHTML+= renderComment(id,text)
            }        
        })
    })
    
}

///////////DOM State///////////////////////////////////
let section = document.getElementById("posts");

let renderComment = (id,text) => `<li id=${id}>${text}</li>`

let templatePosts = (value,text) => `<option value=${value}>${text}</option>`

let renderPostAndComments = (title,body) => {
    let postTitle = document.getElementById("post-title")
    let postBody = document.getElementById("post-body")
    let h2 = document.createElement("h2");
   
    
        postTitle.textContent = title;
        postBody.textContent = body;
        h2.textContent = "Comments";
}

/////////////////////////////////Buttons//////////////////////////////////
let buttonLoadPosts = async() => {
    let btnLoadPosts = document.getElementById("btnLoadPosts")
      return await btnLoadPosts.addEventListener("click", async() => {
          return await appendPostsToSelectTag("posts",section)
        })
}

let buttonViewPosts = async() => {
  let btnViewPost = document.getElementById("btnViewPost")

    return await btnViewPost.addEventListener("click", async () =>{
  
          let listComments = document.getElementById("post-comments");
          let currentOption = section.options[section.selectedIndex]
              listComments.innerHTML = ""
      
        return await appendCommentsToList(currentOption,Posts,listComments)    
    })
}
////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////


async function attachEvents() {
   return await buttonLoadPosts()
                .then(buttonViewPosts)
                .catch(error => {
                    throw new Error(error)
                })
}

attachEvents();



