
let getUsers = async() => {
   try {

     let response = await fetch("http://localhost:3030/jsonstore/advanced/profiles")
     let data = await response.json();
     
     return data

   }catch(e) {

     throw new Error(e)
   }
}

let templateUser = (counter,name,email,age) => {
    let div = document.createElement("div")
        div.className = "profile"
    
    let template = `
     <img src="./iconProfile2.png" class="userIcon" />
     <label>Lock</label>
     <input type="radio" name="user${counter}Locked" value="lock" checked>
     <label>Unlock</label>
     <input type="radio" name="user${counter}Locked" value="unlock"><br>
     <hr>
     <label>Username</label>
     <input type="text" name="user${counter}Username" value=${name} disabled readonly />
     <div id=user${counter}HiddenFields style="display:none">
     <hr>
     <label>Email:</label>
     <input type="email" name="user${counter}Email value=${email} disabled readonly />
     <label>Age:</label>
     <input type="email" name="user${counter}Age" value=${age} disabled readonly />
     </div>
     <button>Show more</button>
    `
    div.innerHTML = template
   
    let buttonProfile = div.querySelector("button")
     
        buttonProfile.addEventListener("click",function(event) {
             
            let user = event.target.parentElement
            let currentButton = user.querySelector("button")
            let hiddenState = user.children[9];  
            let checkedInput = user.querySelector('input[type=radio]:checked') 
    
            if(checkedInput.value === "unlock" && currentButton.textContent === "Show more") {
             
                hiddenState.style.display = "block";
                currentButton.textContent = "Hide it"
     
            }else if(checkedInput.value === "lock" && currentButton.textContent === "Hide it") {
                     return
            }
          
            else {
                   hiddenState.style.display = "none";
                   currentButton.textContent = "Show more"
                }    
        })
       
       main.appendChild(div)
       
}

 let displayUsers = (object) => {
     
      Object.values(object).forEach((user,counter) => {
        let [_,userName,email,age] = Object.values(user)
       
        templateUser(counter + 1,userName,email,age)

      })
 }
    
async function lockedProfile() {
    let main = document.getElementById("main");
        main.innerHTML = ""
        getUsers().then(users =>  displayUsers(users) )
}
