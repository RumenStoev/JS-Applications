let server = `http://localhost:3030`

async function sendData(data) {
   
    try {
        let request = fetch(server + `/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if ((await request).ok) localStorage.setItem("registerUser", JSON.stringify(data))
        
        return  (await request).status
        
    } catch (e) {
        
        throw new Error(e) 
    }
}




export {
    sendData
}
