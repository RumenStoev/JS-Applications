async function loadCommits() {
	let inputName = document.getElementById("username");
	let inputRepo = document.getElementById("repo");
	let list = document.getElementById("commits");
	let request =  await fetch(`https://api.github.com/repos/${inputName.value}/${inputRepo.value}/commits`)

     list.innerHTML = ""

    if(request.ok) {
       let data = await request.json();
	   data.forEach(({commit}) => {
		 insertNameAndMessage(commit.author.name,commit.message)
	   })
	
	  
	} else {
		list.innerHTML = `Error: ${request.status} (Not Found)`
	}

	function insertNameAndMessage (authorName,message) {
		let li = document.createElement("li");
	        li.innerHTML = `${authorName}:${message}`;
		
			list.appendChild(li);
	}
}


