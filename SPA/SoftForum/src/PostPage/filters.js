///////////////////FORM Filters///////////////////////////////
let takePostFormData = (form) =>  {
    let postForm = Object.fromEntries([...new FormData(form).entries()])
        postForm["Date"] = new Date();
    
     return postForm   
}


let clearInputFields = (inputs) => inputs.forEach(input =>  input.value = "")

let renderAllTopics = async(topics,templateFn) => await Object.values(topics).forEach(x => templateFn(x))

let takeLastTopic = async(topic) => await Object.values(topic).pop();

let renderLastTopic = async(topic, templateFn) => templateFn(topic) 


////////////////////////////////////////////////////////////////


export {
     takePostFormData, 
     clearInputFields, 
     renderAllTopics, 
     renderLastTopic, 
     takeLastTopic, 
     
    }