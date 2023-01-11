let url = "http://localhost:3030/jsonstore/advanced/table"


let getDataServer = async () => {

    try {
        let response = await fetch(url)
        return response.json()

    } catch (e) {
        catchError(e, "Error getDataServer request")
    }
}


let catchError = (data, msg) => {
    throw new Error(`${msg} ${data}`)
}




export {
    getDataServer
}