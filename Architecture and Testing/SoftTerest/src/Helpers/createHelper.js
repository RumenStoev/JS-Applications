let isLoggedUser = async () => {
  
    let existUser = localStorage.getItem("loginUser")
    
    let result = JSON.parse(existUser)
   
    return await (result.email) ? true : false
}








export { isLoggedUser }
