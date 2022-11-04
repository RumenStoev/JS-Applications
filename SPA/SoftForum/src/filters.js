let takeDataPostForm = (form) =>  Object.fromEntries([...new FormData(form).entries()])

let clearInputFields = (inputs) => inputs.values(input => input.value = "") 

let getAllTopics = async(topics) => await Object.values(topics)

let renderAllTopics = async(topics,fn) => await topics.forEach(x => fn(x))

let takeLastTopic = async(topic) => (await getAllTopics(topic)).pop()

export { takePostFormData, clearInputFields, getAllTopics, renderAllTopics, takeLastTopic}


