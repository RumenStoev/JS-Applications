


let findCurrentTopic = async(dataServer,searchTopic) => {
     return Object.values(dataServer).filter(x => x.topicName === searchTopic).pop()
}


let getDataForm = async (form) =>  {
    let postForm = Object.fromEntries([...new FormData(form).entries()])
        postForm["Date"] = new Date().toLocaleString()
        
    
     return await postForm   
}


let takeLastPost = async(data) => {
    return Object.values(data).pop()
} 


let allComments = async(data,templateFn) => {
    return Object.values(data).forEach(x => templateFn(x))
}






export { findCurrentTopic, getDataForm, takeLastPost,allComments }