let urlStudents = "http://localhost:3030/jsonstore/collections/students"

let getStudents = async(url) => {
	try {
	     return await fetch(url)
	                  .then(data => {
				return data.json()
			 })
	   }catch(err) {
		throw new Error(err)
	}
}

let sendStudent = async(data) => {
	  return await fetch("http://localhost:3030/jsonstore/collections/students",{
		            method: "post",
		            headers: {"Content-Type" : "application/json"},
		            body: JSON.stringify(data)
	  })
}

let displayStudentsData = async () => {
	let submitButton = document.getElementById("submit");
	let data = document.getElementById("form")
  
	 submitButton.addEventListener("click",async(e) => {
          e.preventDefault()
	    
	     let dataStudent = new FormData(data);
		
		 dataStudent = [...dataStudent.entries()]
		
                 dataStudent = Object.fromEntries(dataStudent)
		
	       await sendStudent(dataStudent).then(data => {
		
           return getStudents(urlStudents)
		 
          }).then(data => {
			
              displayTable(data)
		 })	 
	 })
}

let displayTable = (data) => {
    let tbody = document.querySelector("tbody");
    let td = (text) => `<td>${text}</td>`
       
	tbody.innerHTML = ""

	Object.values(data).forEach(item => {
	   	let tr = document.createElement("tr")
		let dataStudent = [item.firstName,item.lastName,item.facultyNumber,item.grade]
		 
		dataStudent.forEach(x => tr.innerHTML+=td(x))
		tbody.appendChild(tr)
	  })
}


displayStudentsData()

