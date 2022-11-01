let sendProductData = async(data) => {
    let url = "http://localhost:3030/data/furniture";

    let request = await fetch(url,{
        method:"post",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(data)
   })

     
       let dataUser = await request.json();
     
       sessionStorage.setItem("accessToken",dataUser.accessToken)
       
       sessionStorage.setItem("_id",dataUser._id)
    
}



export { sendProductData } 