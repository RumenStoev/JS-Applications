import { isValidForm, redirectToHomePage } from "../../../Utils/filters.js";
import { createMovie } from "../../../Utils/requests.js";



async function addMovieProcess() {

    let addMovieForm = document.getElementById("add-movie-form");

    return await isValidForm(addMovieForm, validAddMovieForm)
                       .then(createMovie)
                       .then(redirectToHomePage)
                       .catch(console.error)
}


let validAddMovieForm = {
    "title": (value) => value !== "",
    "description": (value) => value !== "",
    "img": (value) => value !== ""
}



export { addMovieProcess }
