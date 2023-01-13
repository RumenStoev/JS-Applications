
class TemplateContainer {

   createTable = (tBody) => {
      return ` 
          <button id="loadBooks">LOAD ALL BOOKS</button>
            <table>
               <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                 </tr>
               </thead>
                <tbody>
                  ${tBody}
                <tbody>
           </table>
           
        <form id="add-form">
           <h3>Add book</h3>
           <label>TITLE</label>
           <input type="text" name="title" placeholder="Title...">
           <label>AUTHOR</label>
           <input type="text" name="author" placeholder="Author...">
           <input type="submit" value="Submit">
       </form>  
           
           `
   }
   tBodyTemplate = ({ author, title, id }) => {
      return `
            <tr id="${id}">
                <td>${title}</td>
                <td>${author}g</td>
                <td>
              <button>Edit</button>
              <button>Delete</button>
               </td>
            </tr>
          `
   }

   editFormTemplate = ({ author, title, id }) => {
      return `
   <form id="edit-form">
     
      <h3>Edit book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="${title}">
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="${author}">
      <input type="submit" value="Save" id="${id}">
   </form>
          `
   }

}

let containerTemplates = new TemplateContainer()

export { containerTemplates }
