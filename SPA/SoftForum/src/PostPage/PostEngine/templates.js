

let topicTemplate = ({topicName,username,postText,Date}) => {
   
 let topicTag = document.querySelector("body > div > main > div.topic-title");


 let topicContainer = 
 `<div class="topic-container">
     <div class="topic-name-wrapper">
         <div class="topic-name">
             <a href="#" class="normal">
                 <h2>${topicName}</h2>
             </a>
             <div class="columns">
                 <div>
                     <p>Date: <time>${Date}</time></p>
                     <div class="nick-name">
                         <p>Username: <span>${username}</span></p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>`
   
  
    topicTag.innerHTML += topicContainer
}



export { topicTemplate }