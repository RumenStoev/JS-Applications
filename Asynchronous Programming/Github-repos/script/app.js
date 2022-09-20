
async function loadRepos () {
	let inputName = document.getElementById("username");
	let ul = document.getElementById("repos");
   
	ul.innerHTML = ""
	
	let request = await fetch(`https://api.github.com/users/${inputName.value}/repos`)

	if(request.ok) {
		let receivedData = await request.json();
		receivedData.forEach(({ full_name, html_url }) => {
			insertNameToList(full_name,html_url)
		})
		
	}else {
		console.log("HTTP-Status", request.status + " Not Found")
	}

   function insertNameToList(fullName,urlUser) {
	 
	let a = document.createElement("a");
	let li = document.createElement("li");
    a.setAttribute("href",urlUser);
	a.innerHTML = fullName
	li.appendChild(a)
	ul.appendChild(li);
	
   }
}


