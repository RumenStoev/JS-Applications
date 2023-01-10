import { getDataMenu, postDataMenu } from "./requests.js";


async function renderMenu() {
    return await getDataMenu()
        .then(optionToSelect)
        .catch(e => console.error(e))
}


function templateOptions({ text, _id }) {
    return `<option value=${_id}>${text}</option>`
}



function optionToSelect(data) {

    let menu = document.getElementById("menu");

    return Object.values(data).forEach(data => menu.innerHTML += templateOptions({ ...data }))

}


async function addItem() {
    let text = document.getElementById("itemText").value

    clearMenu()

    return await postDataMenu(text)
        .then(menu.value = "")
        .then(renderMenu)
        .catch(e => console.error(e))
}

function clearMenu() {
    let menu = document.getElementById("menu");
    menu.innerHTML = ""
}

export { renderMenu, addItem }