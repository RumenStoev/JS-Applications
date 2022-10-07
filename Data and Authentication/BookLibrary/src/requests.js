let urlBook = "http://localhost:3030/jsonstore/collections/books"

let getBooks = async() => {
    try {
     let data = await fetch(urlBook)
              return await data.json()
        }catch(err) {
         throw new Error(err)
    }
}       

let getBook = async(id) => {
    return  await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`)
                    .then(data => data.json())
                    .catch(err => console.log(err));
} 


let sendBook = async(data) => {
    return await fetch("http://localhost:3030/jsonstore/collections/books",{
                  method: "post",
                  headers: {"Content-Type" : "application/json"},
                  body:JSON.stringify(data)
                })
                 .catch(err => console.log(err))
  }

let updateBook = async(id,data) => {
      return await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
                   method:"put",
                   headers: { 'Content-Type': 'application/json' },
                   body:JSON.stringify(data)
               })
                
}


let deleteBook = async(id) => {
       return await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
        method: "delete"
       })
}


export { getBooks,getBook, sendBook,updateBook,deleteBook }

