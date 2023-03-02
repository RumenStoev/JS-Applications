
let ideaDetailsView = ({ description, img, title, _createdOn, _id, _ownerId }, isOwner) => {
    console.log("Owner",isOwner)
    let deleteButton = '<a class="btn detb" href="">Delete</a>'

    return ` <div class="container home some" id=${_id}>
               <img class="det-img" src="${img}" />
               <div class="desc">
                 <h2 class="display-5">${title}</h2>
                 <p class="infoType">Description:</p>
                 <p class="idea-description">${description}</p>
                </div>
                    ${(isOwner) ? deleteButton : ""}
      
             </div>
`

}




export { ideaDetailsView }