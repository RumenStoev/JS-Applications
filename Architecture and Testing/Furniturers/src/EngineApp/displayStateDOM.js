async function displayDOMState(cbTemplate) { 

    let root = document.getElementById("root")

    return root.innerHTML = await cbTemplate()

}


export { displayDOMState }
