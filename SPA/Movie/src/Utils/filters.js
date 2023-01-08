import { homeTemplate } from "../Components/HomePage/homeView.js"
import { loginTemplate } from "../Components/Nav-Bar/LoginPage/loginView.js"
import { detailsTemplate } from "../Components/HomePage/DetailsMoviePage/detailsView.js"

//Variant of writing helper functions
class HelperFnContainer {
     constructor() {
          this.data = {};
     }
    
     insertFunctionInContainer(section,fnName,fn) {
          if(this.data[section] === undefined) {
               this.data[section] = {}
          }
          
          if(this.data[section][fnName] === undefined) {
               this.data[section][fnName] = {}
          }

          this.data[section][fnName] = {
               "descriptionFn":"",
               "implementFn":fn
          }
          
     }
   
     describeFn(section,fnName,description) {
          this.data[section][fnName]["descriptionFn"]  = description
     }
      
     searchFunctionInSection(section,fn) {
          if(this.data[section] === undefined) {
               return `There is no such ${section}`
          }
          if(fn === undefined) {
               return this.data[section]
          }
          if(this.data[section].hasOwnProperty(fn)) {
               return this.data[section][fn]
          }else {
               return `There is no ${fn} in section ${section}`
          }
     }
}

let container = new HelperFnContainer()
window.container = container



//////////////////////Form//////////////////////////////////////////

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

container.insertFunctionInContainer("form","isValidForm",isValidForm)
container.describeFn("form","isValidForm","Check whether form inputs match to requirements (param as an Object)")
//////////////////////////////////////////////////////////////////////////

///////RedirectTo.../////////////////////////////////////////////////////

let redirectToHomePage = (statusRequest) => {

     if (statusRequest === 200 || statusRequest === undefined) {
          displayPage(homeTemplate())

     }

     else {
          throw new Error("You have no permissions to Access!")
     }
}

let redirectToLoginPage = () => displayPage(loginTemplate())

/////////////////////////////////////////////////////////////////////

let checkLoggedEmail = () => {
     let lastLoginEmail = JSON.parse(sessionStorage.getItem("loginData"));

     return (lastLoginEmail) ? lastLoginEmail.email : "email"
}


////////RenderHTML///////////////////////////////////////////////////
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

let isLogged = () => (checkLoggedEmail() !== "email") ? "block" : "none"

/////////////////////////////////////////////////////////////////////////

/////////////////////Movie Filters//////////////////////////////////////////////

let takeCurrentMovie = (dataMovies, ownerId) => Object.values(dataMovies).filter(movie => movie._ownerId === ownerId)


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

let getMovieID = (data, byTitle) => Object.values(data).filter(movie => movie.title === byTitle).pop();


//////////////////////////////////////////////////////////////////////////////



///////////////////////SessionStorage////////////////////////////////////
let takeCurrentMovieID = () => JSON.parse(sessionStorage.getItem("dataMovie"))._id

let getDataCurrMovie = () => JSON.parse(sessionStorage.getItem("idMovie"))

let accessToken = () => JSON.parse(sessionStorage.getItem("loginData")).accessToken

/////////////////////////////////////////////////////////////////////////






export {
     getDataForm,
     isValidForm,
     redirectToHomePage,
     checkLoggedEmail,
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
     accessToken,
     likesTetmplate,
     container
}


