let tableSearchTemplate = ({firstName,lastName,email,course}) => {
    return ` <tr>
               <td>${firstName} ${lastName}</td>
               <td>${email}</td>
               <td>${course}</td>
            </tr>`
}





export {
    tableSearchTemplate
}