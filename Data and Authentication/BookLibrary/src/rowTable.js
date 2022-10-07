
let renderRowTable = (data,buttons) => {
    let tbody = document.querySelector("body > table > tbody")
    let tdButton = (buttons) => {
      let tdButton = document.createElement("td")
         Object.values(buttons).forEach(btn => {//???
            tdButton.append(btn())
         })
        return tdButton   
   }
       
    let td = (text) =>  `<td>${text}</td>`
    
         tbody.innerHTML = ""
    console.log("All Data getBooks",data)
    
    Object.entries(data).forEach(([id,dataBook]) => {
      let [title,author] = Object.values(dataBook);  
      
       let tr = document.createElement("tr")
      
            
            tr.setAttribute("id",id)
            tr.innerHTML += td(title)
            tr.innerHTML += td(author)
            tr.appendChild(tdButton(buttons))
            
           
     
       tbody.appendChild(tr)     

    })
    return tbody
}

let updateRowTable = (id) => {
   
}



export { renderRowTable }

