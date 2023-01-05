import { homeTemplate } from "../Components/HomePage/homeView.js"
import { loginTemplate } from "../Components/Nav-Bar/LoginPage/loginView.js"
import { detailsTemplate } from "../Components/HomePage/DetailsMoviePage/detailsView.js"



let getDataForm = async (formTag) => Object.fromEntries([...new FormData(formTag).entries()])

let isValidForm = async (formData, requirements) => {
     let processedForm = await getDataForm(formData)
     let dataForm = Object.values(processedForm)


     if (requirements !== undefined) {

          Object.values(requirements).forEach((compareData, i) => {

               if (!compareData(dataForm[i], dataForm[i - 1])) {
                    throwError("The Form is incorrect filled")
               }

          });
     }

     return processedForm
}



let throwError = (msg) => {
     throw new Error(msg)
}


let redirectToHomePage = (statusRequest) => {

     if (statusRequest === 200 || statusRequest === undefined) {
          displayPage(homeTemplate())

     }

     else {
          throw new Error("You have no permissions to Access!")
     }
}


let checkLoggedEmail = () => {
     let lastLoginEmail = JSON.parse(sessionStorage.getItem("loginData"));

     return (lastLoginEmail) ? lastLoginEmail.email : "email"
}


let redirectToLoginPage = () => displayPage(loginTemplate())

let displayPage = (pageContent) => {

     let fragment = document.createDocumentFragment();

     fragment.innerHTML = pageContent

     document.getElementById("container").innerHTML = fragment.innerHTML

}

let displayMovies = (containerMovies) => {

     let moviesContainer = document.getElementById("movies-list")
     let loggedUser = JSON.parse(sessionStorage.getItem("loginData")).email

     if (loggedUser) {
          return containerMovies.forEach(movie => {
               let { _ownerId, title, description, img } = movie;

               moviesContainer.innerHTML += `
               <li class="card" id="${_ownerId}">
                       <img class="card-img-top" src="${img}" class="img-thumbnail">
                       <p>${title}</p>
                   <div id="btnDetailsMovie">
                     <button id="movieDetailsBtn" class="btn btn-info">Details</button> 
                   </div>
               </li>`
          })
     } else {
          return

     }
}

let isLogged = () => (checkLoggedEmail() !== "email") ? "block" : "none"


let takeCurrentMovie = (dataMovies, ownerId) => Object.values(dataMovies).filter(movie => movie._ownerId === ownerId)

let movieNotCreatedByUser = () => `<a class="btn btn-primary" href="#"  id="likeBtn">Like</a>`


let movieCreatedByUser = () => {
     return `
      
     <a class="btn btn-danger" href="#" id="deleteBtn">Delete</a>
   
     <a class="btn btn-warning" href="/edit" id="edit">Edit</a>
   
   
     <a class="btn btn-primary" href="#" id="likeBtn">Like</a>
 
     <span class="enrolled-span">Liked 1</span>
 `
}

let likesTetmplate = (numberLikes) => {
     return `<span class="enrolled-span">Liked ${numberLikes}</span>`
}


let findMoviesLoggedUser = (dataMovies, text, idLi) => {

     let idUser = JSON.parse(sessionStorage.getItem("loginData"))._id;
     let ownerMovies = (arr, text) => Object.values(arr).filter(movie => movie.title === text).pop()
     let dataMovie = ownerMovies(dataMovies, text)
     
     sessionStorage.setItem("idMovie", JSON.stringify({ movieId: dataMovie._id, userId: dataMovie._ownerId }))

     return (idUser === idLi) ? detailsTemplate(dataMovie, movieCreatedByUser)
          : detailsTemplate(dataMovie, movieNotCreatedByUser)
}

let getParticularFilm = async (data, nameMovie) => {
     return await Object.values(data).filter(movie => {
          if (movie.title === nameMovie) {
               sessionStorage.setItem("dataMovie", JSON.stringify(movie))
               return movie
          }
     }).pop()
}

let takeCurrentMovieID = () => JSON.parse(sessionStorage.getItem("dataMovie"))._id

let getMovieID = (data, byTitle) => Object.values(data).filter(movie => movie.title === byTitle).pop();

let getDataCurrMovie = () => JSON.parse(sessionStorage.getItem("idMovie"))


export {
     getDataForm,
     isValidForm,
     redirectToHomePage,
     checkLoggedEmail,
     logoutUser,
     isLogged,
     redirectToLoginPage,
     displayPage,
     displayMovies,
     takeCurrentMovie,
     findMoviesLoggedUser,
     getParticularFilm,
     takeCurrentMovieID,
     getMovieID,
     getDataCurrMovie,
     likesTetmplate
}
