
function checkLoggedInUser() { 
    let user = localStorage.getItem("loginUser")

  
    return (user !== null) ? true : false


}




export { checkLoggedInUser }