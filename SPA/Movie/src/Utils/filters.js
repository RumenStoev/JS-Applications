
let getDataForm = async (formTag) => Object.fromEntries([...new FormData(formTag).entries()])

let isValidForm = async (formData,requirements) => {

    let dataForm = await getDataForm(formData)    
    
    let checkFormData = Object.values(dataForm);

     if(requirements !== undefined && typeof dataForm === "object") {   
   
      Object.values(requirements).forEach((checkForm,i) => {
        
            if(!checkForm(checkFormData[i],checkFormData[i - 1])) {
                throwError("The Form is incorrect filled")      
            }
            
    });
  }
    return dataForm
   
 }


 let throwError = (msg) => { //Two storages one for Developer one for a client!
      throw new Error(msg)
 } 

 let redirectToHomePage = (statusRequest) => {
       console.log(statusRequest)
    if(statusRequest === 200 || statusRequest === undefined) {
       window.location.replace("http://localhost:4000/")
    }
      else {
         throw new Error("You have no permissions to Access!")
      }
 }


export { getDataForm,isValidForm, redirectToHomePage }
