import { catalogDataForm } from "./filters.js";
import { sendProductData } from "./request.js";

let catalogForm = document.querySelector("#exercise > div > div > div > div > form");
let catalogButton = document.querySelector("#exercise > div > div > div > div > form > button");

async function takeCatalogData(event) {
    event.preventDefault()
    
    let data = catalogDataForm(catalogForm);
    console.log(data)
    return await sendProductData(data)
} 

catalogButton.addEventListener("click",await takeCatalogData)





export { catalogButton }


