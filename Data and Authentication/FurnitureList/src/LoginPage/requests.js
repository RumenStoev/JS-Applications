
let sendRegisterData = async(url,data,redirectFn) => {
  
  try {
    let request = await fetch(`http://localhost:3030/users/${url}`,{
         method:"post",
         headers: {"Content-Type":"application/json"},
         body:JSON.stringify(data)
    })
        if(request.ok && redirectFn !== undefined) {
            redirectFn()
        }
      
        let dataUser = await request.json();
      
        sessionStorage.setItem("accessToken",dataUser.accessToken)
        
        sessionStorage.setItem("_id",dataUser._id)
     
       
    } catch(err)  {
       
         throw new Error(err);
    }
}







export { sendRegisterData }