import { updateBook } from "./requests.js";
import { renderAllBook } from "./buttons.js";
let createForm = () => {
    let title = document.querySelector(`#createForm > input[type=text]:nth-child(3)`);
    let author = document.querySelector(`#createForm > input[type=text]:nth-child(5)`)
    
    let dataForm = {  author:author.value ,title:title.value} 
   
 
   return dataForm
}

let editForm = async(title,author,id) => {
    
        let btnSave = document.querySelector("#editForm > button")
        let formSave = document.getElementById("editForm");
        let createForm = document.getElementById("createForm");
        let editTitle = document.querySelector("#editForm > input[type=text]:nth-child(4)");
        let editAuthor = document.querySelector("#editForm > input[type=text]:nth-child(6)")
           editAuthor.value = title;
           editTitle.value = author
           createForm.style.display = "none"
           formSave.style.display = "block"

     btnSave.addEventListener("click",async(e) => {
         e.preventDefault()
            
         console.log({author:editAuthor.value,title:editTitle.value,id:id })
             return await updateBook(id,{ title:editTitle.value,author:editAuthor.value,id:IDBCursor })
                          .then(renderAllBook)        
                
        })
           
   
}



export { createForm,editForm }





