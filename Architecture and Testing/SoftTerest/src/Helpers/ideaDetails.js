function displayIdeaDetail(ideaDetail, viewTemplate) {
    let { description, img, title, _createdOn, _id, _ownerId } = ideaDetail;
 
    return viewTemplate({ description, img, title, _createdOn, _id, _ownerId },isOwner(_ownerId));
}




let isOwner = (ownerId) => {
    let ownerCreaterId = JSON.parse(localStorage.getItem("loginUser"))

    if (ownerCreaterId !== null) ownerCreaterId = ownerCreaterId._id


    return (ownerId === ownerCreaterId) ? true : false
}

export {
    displayIdeaDetail,
    isOwner
}