



let takeSelectedTopic = async(topics,target) => await Object.values(topics).filter(topic => topic.topicName === target ).pop()
//let renderTopic = async(topic) =>  


export { takeSelectedTopic }