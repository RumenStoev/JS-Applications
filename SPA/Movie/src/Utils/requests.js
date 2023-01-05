
import { redirectToLoginPage } from "./filters.js"

let serverURL = `http://localhost:3030/`
let moviePath = `data/movies`
let likesPath = `data/likes`
let usersRegister = `users/register`
let usersLogin = `users/login`


////AccessToken for the Server////
let accessToken = JSON.parse(sessionStorage.getItem("loginData")).accessToken
/////////////////////////////////

async function getMovies() {
    return await fetch(serverURL + moviePath)
        .then(isValidJSON)
        .catch(catchError)
}


async function createMovie(data) {
    return await fetch(serverURL + moviePath, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'X-Authorization': accessToken

        },
        body: JSON.stringify(data)
    })
        .then(x => x.status)
        .catch(catchError)
}


async function updateMovie(data, id) {
    let idMovie = JSON.parse(sessionStorage.getItem("dataMovie"))._id

    try {

        let request = await fetch(serverURL + moviePath + `/${idMovie}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": accessToken
            },
            body: JSON.stringify(data)
        })

        return request.status

    } catch (e) {

        catchError(e)
    }

}


async function deleteMovie(id) {
    return await fetch(serverURL + moviePath + `/${id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": accessToken
        }
    })
        .then(request => request.status)
        .catch(catchError)

}


async function getMovieLikes(movieId) {
    let allLikesPath = `data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`
    try {
        let response = await fetch(serverURL + allLikesPath)

        return await response.json()
    } catch (e) {
        catchError(e)
    }

}


async function getLikeSpecificUser(movieId, userId) {
    try {
        const response = await fetch(`${serverURL}data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`)
        return await response.json()
    } catch (e) {
        catchError(e)
    }

}

async function addLike(id) {

    return await fetch(serverURL + likesPath, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": accessToken
        },
        body: JSON.stringify({ movieId: id })
    })
        .then(x => x.json())
        .catch(catchError)
}


async function revokeLike(likeId) {
    return await fetch(serverURL + likesPath + `/${likeId}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": accessToken
        }
    })
        .then(request => request.json())
        .catch(catchError)
}


async function registerUser(data) {
    try {
        let request = await fetch(serverURL + usersRegister, {
            method: "post",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data)
        })
        if (request.ok) {
            const dataRequest = await request.json();

            sessionStorage.setItem("data", JSON.stringify(dataRequest))
            return request.status
        }
    } catch (e) {
        catchError(e)
    }


}
async function loginUser(data) {

    try {

        let request = await fetch(serverURL + usersLogin, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if (request.ok) {
            sessionStorage.setItem("loginData", JSON.stringify(await request.json()))
            return request.status

        } else {
            return request.status
        }


    } catch (e) {

        catchError(e)
    }


}

async function logout() {
    try {
        let request = await fetch("http://localhost:3030/users/logout", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: sessionStorage.getItem("loginData")

        })
        if (request.ok) {

            sessionStorage.removeItem("loginData");
            redirectToLoginPage()
        }

    } catch (e) {
        catchError(e)
    }
}


let isValidJSON = async (data) => {
    if (!data.ok) throw new Error(data.statusText)
    return data
}



let catchError = async (data) => {
    return Promise.reject(data)
}



export {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie,
    getMovieLikes,
    getLikeSpecificUser,
    addLike,
    revokeLike,
    registerUser,
    loginUser,
    logout
}
