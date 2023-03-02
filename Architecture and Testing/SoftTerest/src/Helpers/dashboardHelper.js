

let displayAllIdeas = (ideas, viewTemplate, secondTemplate) => {
    
    if (!ideas) return secondTemplate()

    let allIdeas = ""

    ideas.forEach(({ img, title, _id }) => {

        allIdeas += viewTemplate(img, title, _id)

    });

    return allIdeas
}




export { displayAllIdeas }