import { registerUserProcess } from "./Components/Nav-Bar/RegisterPage/registrationProcess.js"
import { loginUserProcess } from "./Components/Nav-Bar/LoginPage/loginProcess.js"
import { addMovieTemplate } from "./Components/HomePage/AddMoviePage/addMovieView.js"
import { addMovieProcess } from "./Components/HomePage/AddMoviePage/addMovieProcess.js"
import { router } from "./Router.js"
import { logout } from "./Utils/requests.js"
import { detailsTemplate } from "./Components/HomePage/DetailsMoviePage/detailsView.js"
import { editMovieProcess } from "./Components/HomePage/EditMoviePage/editMovieProcess.js"
import { clickLikeBtn, deleteMovieProcess, displayDetailsMovie } from "./Components/HomePage/DetailsMoviePage/detailsMovie.js"
import { submitEditForm } from "./Components/HomePage/EditMoviePage/editMovieProcess.js"
import { displayPage } from "./Utils/filters.js"

document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", (e) => {
    e.preventDefault()

    let currentForm = e.target.parentElement.id

    if (formsById.hasOwnProperty(currentForm)) {
      formsById[currentForm](e.target)
    }

    if (anchorLinks.hasOwnProperty(e.target.id)) {
      anchorLinks[e.target.id]()
    }

  })

  router()

})

let formsById = {
  "register-form": () => registerUserProcess(),
  "login-form": () => loginUserProcess(),
  "add-movie-button": () => displayPage(addMovieTemplate()),
  "add-movie-form": () => addMovieProcess(),
  "register": () => router(),
  "login": () => router(),
  "logout": () => logout(),
  "btnDetailsMovie": (e) => displayDetailsMovie(e),
  "editForm": () => submitEditForm()
}

let anchorLinks = {
  "header-nav-bar": router,
  "movieDetails": () => detailsTemplate(),
  "edit": () => editMovieProcess(),
  "likeBtn": () => clickLikeBtn(),
  "deleteBtn": () => deleteMovieProcess()
}





