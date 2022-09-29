const url = `http://localhost:3030/jsonstore/phonebook`

const sendData = async(url,data) => {
    return await fetch(url,{
        method: "post",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    })
  
}

const loadData = async(url) => {
   
    return await fetch(url)
                      .then(result => result.json())
                      .catch(err => console.log(err))
}

const deleteData = async(url,key) => {
    return await fetch(`${url}/${key}`,{ method: "delete"})
}

//////////////Buttons///////////////////////////////

let person = document.getElementById("person");
let phone = document.getElementById("phone");
let btnCreate = document.getElementById("btnCreate");
let btnLoad = document.getElementById("btnLoad")
let listUsers = document.getElementById("phonebook")


let appendUsersToList = (users) => {
	listUsers.innerHTML = ""

         Object.values(users).forEach(user => {
		
		let li = document.createElement("li")
	            li.setAttribute("id","phonebook")	
		    li.textContent = `${user.person}: ${user.phone}`

		    li.appendChild(btnDelete(user._id))
		    listUsers.appendChild(li)
	})
      
}



btnCreate.addEventListener("click", async() => {
	return await sendData(url,{person:person.value,phone:phone.value})
	                    .then(data => {
			         return loadData(url)
			  }).then(users => {
			        appendUsersToList(users)})
					
})

btnLoad.addEventListener("click", async() => {
    return await loadData(url).then(users => appendUsersToList(users))		  
})


let btnDelete = (userId) => {
    let buttonDelete = document.createElement("button")
        buttonDelete.setAttribute("id",`${userId}`)
	buttonDelete.textContent = "Delete"

	buttonDelete.addEventListener("click",async(event) => {
		let currentButton = event.target.parentNode
		let id = event.target.getAttribute("id")

		deleteData(url,id)
		currentButton.remove()
     })
	
   return buttonDelete
}
///////////////////////////////////////////////////////////////////
