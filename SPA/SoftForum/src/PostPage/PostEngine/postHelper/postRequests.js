let postURL =  "http://localhost:3030/jsonstore/collections/myboard/posts"


async function sendPost(data) {

    return await fetch(postURL,{
        method: "post",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(data)
    }).catch(catchError)
}


 async function getPosts() {
     return await fetch(postURL)
                  .then(isValidJSON)
                  .catch(catchError)
}


let isValidJSON = async (data) => {
    if(!data.ok) throw new Error(data.statusText)

    return await data.json()
}

let catchError = async(err) => {
    return await Promise.reject(err)
}


export { sendPost, getPosts }