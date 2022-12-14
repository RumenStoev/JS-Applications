
let serverURL = `http://localhost:3030/`
let moviePath = `data/movies`
let likesPath = `data/likes`
let usersRegister = `users/register`
let usersLogin = `users/login`


async function getMovies() {
    return await fetch(serverURL + moviePath)
            .then(isValidJSON)
            .catch(catchError)
}


async function createMovie(data) {
    return await fetch(serverURL + moviePath,{
        method: "post",
        headers: {
            "Content-Type":"application/json",
            "X-Authorization":sessionStorage.getItem("token")
     },
        body: JSON.stringify(data) 
    })
    .catch(catchError)
}


async function updateMovie(id) {
     return await fetch(serverURL + moviePath + `/${id}`,{
        method: "put",
        headers: {
            "Content-Type":"application/json",
            "X-Authorization":sessionStorage.getItem("token")
        },
        body: JSON.stringify(data)
     })
     .catch(catchError)
}


async function deleteMovie(id) {
    return await fetch(serverURL + moviePath + `/${id}`,{
        method: "delete",
        headers: {
            "Content-Type":"application/json",
            "X-Authorization":sessionStorage.getItem("token")
        }
    })
    .catch(catchError)
        
}


async function getMovieLikes(movieId) {
    let likesPath = `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`
    
    return await fetch(serverURL + likesPath)
               .then(isValidJSON)
               .catch(catchError)
}


async function getLikeSpecificUser(movieId,userId) {
    let likeSpecificUser = `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22 `
    
    return await fetch(serverURL + likeSpecificUser)
              .then(isValidJSON)
              .catch(catchError)
}

async function addLike(data) {
   
    return await fetch(serverURL + likesPath,{
        method: "post",
        headers: {
            "Content-Type":"application/json",
            "X-Authorization":sessionStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
    .catch(catchError)
}


async function revokeLike(likeId) {
   return await fetch(serverURL + likesPath + `/${likeId}`,{
    method: "delete",
    headers: {
        "Content-Type":"application/json",
        "X-Authorization":sessionStorage.getItem("token")
    }
   })
   .catch(catchError)
} 



async function registerUser(data) {
   try {
    let request =  await fetch(serverURL + usersRegister,{
        method: "post",
        headers:{"Content-Type":"application/json",
        
    },
        body: JSON.stringify(data)
    })
    
    if(request.ok) {
        const dataRequest = await request.json();

        sessionStorage.setItem("data",JSON.stringify(dataRequest))
		return request.status
    }
  } catch(e) {
    catchError(e)
 }
            
}

async function loginUser(data) {
   
    try {

        let request = await fetch(serverURL + usersLogin, {
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    
     if(request.ok) {
        sessionStorage.setItem("loginData",JSON.stringify(request.json()))
        return request.status
     }else {
        return request.status
     }
    
    
 } catch(e) {
    
   catchError(e)
 }
   
                
}



let isValidJSON = async(data) => {
    if(!data.ok) throw new Error(data.statusText)
    return data;
}
let setSessionStorage = async(data) =>  sessionStorage.setItem('set',JSON.stringify(data))


let catchError = async(data) => {
     return Promise.reject(data)
}


let successData = async(data) => { //SessionStorage ?????
    if(data.ok) sessionStorage.setItem()
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
    loginUser
}
