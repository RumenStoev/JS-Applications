let server = `http://localhost:3030`

async function registerUser(data) {

    try {
        let request = fetch(server + `/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if ((await request).ok) setLocaleStorage('registerUser', data)

        return (await request).status

    } catch (e) {

        throw new Error(e)
    }

}


async function loginUser(data) {
    try {
        let request = fetch(server + `/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if ((await request).ok) setLocaleStorage("loginUser", data)
        


        return (await request).status
        
    } catch (e) {
        throw new Error("Error in loginUser", e)

    }

}

function setLocaleStorage(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));

}


export {
    registerUser,
    loginUser
}
