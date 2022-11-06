// http://localhost:3030/jsonstore/collections/myboard/posts


async function sendPost(data) {
    let url = "http://localhost:3030/jsonstore/collections/myboard/posts"

    return fetch(url,{
        method: "post",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(data)
    }).catch(err => {
        throw new Error(err)
    })
}


 async function getPosts() {
     let url = "http://localhost:3030/jsonstore/collections/myboard/posts"

     return fetch(url)
                  .then(data => data.json())
                  .catch(err => { throw new Error(err) })

}


async function getComments() {
    let url = "http://localhost:3030/jsonstore/collections/myboard/comments" 

}


export { sendPost, getPosts }