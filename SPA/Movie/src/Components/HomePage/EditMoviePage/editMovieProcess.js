import { getMovies,updateMovie } from "../../../Utils/requests.js"
import { getParticularFilm,displayPage,getDataForm, redirectToHomePage} from "../../../Utils/filters.js"
import { editTemplate } from "./editView.js"


async function editMovieProcess() { //This querySelector have to be replace!
    let title = document.querySelector("#movieDetails > div > div > h1").textContent
        title = title.split(": ")[1]
     return await getMovies()
                      .then(data => getParticularFilm(data,title))
                      .then(editTemplate)
                      .then(displayPage)
                      .catch(console.error)
}

async function submitEditForm() {
    let editForm = document.getElementById("editForm")
    return await getDataForm(editForm)
                .then(updateMovie)
                .then(redirectToHomePage)
                .catch(console.error)
           
               
}




export { editMovieProcess,submitEditForm }
