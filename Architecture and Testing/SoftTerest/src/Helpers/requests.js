import { setLocaleStorage, getAccessToken, InitObjBuilder } from "./requestHelper.js"


let server = `http://localhost:3030`

async function registerUser(data) {

    try {
        let request = fetch(server + `/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if ((await request).ok) setLocaleStorage('registerUser', await (await request).json())

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

        if ((await request).ok) setLocaleStorage("loginUser", await (await request).json())

        return (await request).status

    } catch (e) {
        throw new Error("Error in loginUser", e)

    }

}


async function logoutUser() {

    try {
        let request = await fetch("http://localhost:3030/users/logout", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (request.ok) {
            localStorage.removeItem("loginUser");

        }

        return request.status

    } catch (e) {
        catchError(e)
    }
}


async function takeIdeasDashboard() {
    try {
        let request = await fetch("http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc")

        return await request.json()
    }
    catch (e) {
        throw new Error(e)
    }

}





async function createIdea({ title, description, img }) {


    try {
        let request = fetch(server + `/data/ideas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": getAccessToken("loginUser")

            },

            body: JSON.stringify({ img, title, description })
        })
        if ((await request).ok) console.log("The idea is created")

        return (await request).status

    } catch (error) {
        throw new Error("createIdea", error)

    }
}

async function takeIdeasDetail(idIdea) {

    try {
        let request = await fetch(server + `/data/ideas/${idIdea}`)

        if (request.ok) {
            return await request.json()
        }


    }
    catch (e) {
        throw new Error("TakeIdeaRequest", e)
    }
}


async function deleteIdea(id) {
    try {
        let request = await fetch(`http://localhost:3030/data/ideas/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": getAccessToken("loginUser")
            }
        })

        return request.status

    } catch (e) {
        throw new Error(e)
    }
}




export {
    registerUser,
    loginUser,
    logoutUser,
    takeIdeasDashboard,
    createIdea,
    takeIdeasDetail,
    deleteIdea
}
