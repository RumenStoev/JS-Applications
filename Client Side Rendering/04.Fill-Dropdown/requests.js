const urlMenuData = "http://localhost:3030/jsonstore/advanced/dropdown "



const getDataMenu = async () => {
    return fetch(urlMenuData)
        .then(data => data.json())
        .catch(e => console.error(e))
}

const postDataMenu = async (data) => {
    return fetch(urlMenuData, {
        method: "post",
        headers: {    'Content-Type': 'application/json' },
        body: JSON.stringify({text:data})
    })
        .catch(e => console.error(e))
}



export {
    getDataMenu,
    postDataMenu
}