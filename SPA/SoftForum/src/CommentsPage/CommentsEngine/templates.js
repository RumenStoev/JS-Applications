


let commentTemplate = ({Date,postText,topicName,username}) => {
   
    let divContainer = document.querySelector("body > div")
    divContainer.innerHTML = ""

  let comment = `<div class="comment">
       <div class="header">
          <img src="./static/profile.png" alt="avatar">
        <p><span>${username}</span> posted on <time>${Date}</time></p>

        <p class="post-content">${postText}</p>
          </div>
      </div>`

  divContainer.innerHTML += comment
}


export { commentTemplate }