///////////////////FORM Filters///////////////////////////////////
let getDataForm = async (form) =>  {
    let postForm = Object.fromEntries([...new FormData(form).entries()])
        postForm["Date"] = new Date().toLocaleString();
        
     return await postForm   
}

let clearInputFields = (inputs) => inputs.forEach(input =>  input.value = "")

let renderAllTopics = async(topics,topicTemplate) => await Object.values(topics).forEach(topic => topicTemplate(topic)) 

/////////////////////////////////////////////////////////////////////


export { getDataForm, clearInputFields, renderAllTopics, isValidJSON }
