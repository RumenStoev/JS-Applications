

let topicTemplate = ({topicName,username,postText,Date}) => {
  let container = document.querySelector(".container")

  let comments =  ` <div class="theme-content">
    <!-- theme-title  -->
    <div class="theme-title">
        <div class="theme-name-wrapper">
            <div class="theme-name">
                <h2>${topicName}</h2>
            </div>
        </div>
    </div>
    <!-- comment  -->

    <div class="comment">
        ${commentTemplate({username,postText,Date})}
     
    </div>

    <div class="answer-comment">
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>

</div>
</div>
`

 container.innerHTML = comments
}


let commentTemplate = ({topicName,username,postText,Date}) => {
    
    return ` <div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>${username}</span> posted on <time>${Date}</time></p>

    <p class="post-content">${postText}</p>
</div>
`

}


let postedCommentTemplate = ({topicName,username,postText,Date}) => {
    let commentsContainer = document.querySelector(".comment")
    let userComment =  `<div id="user-comment">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${username}</strong> commented on <time>${Date}</time></p>
            <div class="post-content">
                <p>${postText}</p>
            </div>
        </div>
    </div>
</div>
</div>`

commentsContainer.innerHTML += userComment
}

export { topicTemplate, postedCommentTemplate }