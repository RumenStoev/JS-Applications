
let getDataForm = (formTag) => Object.fromEntries([...new FormData(formTag).entries()])

let isValidForm = async (formData,requirements,errorMsg) => {

    let dataForm = getDataForm(formData)    
    
    let checkFormData = Object.values(dataForm);

     if(requirements !== undefined && typeof dataForm === "object") {   
   
      Object.values(requirements).forEach((checkForm,i) => {
        
            if(!checkForm(checkFormData[i],checkFormData[i - 1])) {
                throwError(errorMsg)      
            }
            
    });
 }
    return dataForm
   
 }


 let throwError = (msg) => {
      throw new Error(msg)
 } 

 let redirectToHomePage = (statusRequest) => {
    if(statusRequest === "OK") window.location.replace("http://localhost:4000/")
 }


export { getDataForm,isValidForm, redirectToHomePage }
