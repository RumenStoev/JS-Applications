import { getBooks,getBook, sendBook,updateBook,deleteBook } from "./requests.js"
import { createForm,editForm } from "./formBook.js"
import { renderRowTable } from "./rowTable.js"



let renderAllBook = async() => {
    return await getBooks()
                  .then(data => {
                      renderRowTable(data,{editButton,deleteButton})           
    })
}


let loadAllBooks = async(buttons) => {
    let buttonLoad = document.getElementById("loadBooks");
        buttonLoad.addEventListener("click", async(e) =>  {
           e.preventDefault()
           
           return await renderAllBook()
        })
}




let submitButton = async() => {
    let buttonSubmit = document.querySelector("#createForm > button");
  
    buttonSubmit.addEventListener("click",async(e) => {
          e.preventDefault();
         
          return await sendBook(createForm())
                          .then(renderAllBook) 
        
   })
}



let editButton = () => {
    
    let  btnEdit = document.createElement("button")
         btnEdit.textContent = "Edit"
         btnEdit.className = "editButton"
         
  btnEdit.addEventListener("click",async(e) => {
            
      let currentRow = e.target.parentNode.parentNode
         
             
       return getBook(currentRow.id)
                  .then(data => {
                    editForm(data.title,data.author,data._id)
                  })
                  
  })

   return  btnEdit 
 }
       
    
let deleteButton = () => {   //ClassName???
    let btnDelete = document.createElement("button")
        btnDelete.textContent = "Delete"
        btnDelete.className = "deleteButton"
        
    btnDelete.addEventListener("click",async(e) => {
        let currentRow = e.target.parentNode.parentNode
        console.log(currentRow)
        return await deleteBook(currentRow.id).then(currentRow.remove())
    })

  return  btnDelete
}



let saveButton = async() => {
   
     
}


export { loadAllBooks,submitButton , saveButton,renderAllBook }