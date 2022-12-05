
let getDataForm = (formTag) => Object.fromEntries([...new FormData(formTag).entries()])

let isValidForm = async (formData,requirements,errorMsg) => {

    let dataForm = getDataForm(formData)    
    let checkFormData = Object.values(dataForm);

     if(requirements !== undefined) {   
   
      Object.values(requirements).forEach((checkForm,i) => {
        
            if(!checkForm(checkFormData[i],checkFormData[i - 1])) {
                throwError(errorMsg)      
            }
            
    });
}
    return dataForm
   
 }


 let throwError = (msg) => { //Two storages one for Developer one for a client!
      throw new Error(msg)
 } 

 let containerErrors = {

 }


 let sessionStorageData = async(dataStorage) => {
     console.log(dataStorage)
     return Object.entries(dataStorage).forEach(([key,value]) => {
          console.log(value);
     })

     
 }


export { getDataForm,isValidForm,sessionStorageData }