let urlComments = "http://localhost:3030/jsonstore/collections/myboard/comments"
let urlTopics = "http://localhost:3030/jsonstore/collections/myboard/posts"

let getTopics = async () => {
    return await fetch(urlTopics)
                   .then(isValidRequest)
                   .catch(catchError)
}


let sendComments = async (data) => {
    return await fetch(urlComments, {
                         method: "post",
                         headers: { "Content-Type": "application/json" },
                         body: JSON.stringify(data)
                      })
                      .then(isValidRequest)
                      .catch(catchError)
}

let getComments = async() => {
    return await fetch(urlComments)
                   .then(isValidRequest)
                  .catch(catchError)
}

 


let isValidRequest = async (data) => {
    if (!data.ok) throw new Error(data.statusText)

    return await data.json()
}

let catchError = async (err) => {
    return await Promise.reject(err)
}




export { getTopics, sendComments, getComments }