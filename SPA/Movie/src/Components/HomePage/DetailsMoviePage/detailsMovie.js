import { getMovies,addLike, getLikeSpecificUser, getMovieLikes,deleteMovie } from "../../../Utils/requests.js";
import { displayPage, findMoviesLoggedUser, redirectToHomePage } from "../../../Utils/filters.js";




async function displayDetailsMovie(idCurrentLi) {

    let idLi = idCurrentLi.parentElement.parentElement
    let text = idLi.children[1].textContent


    return await getMovies()
        .then(data => findMoviesLoggedUser(data, text, idLi.id))
        .then(displayPage)
        .catch(console.error)
}


async function clickLikeBtn() { 
    let idLoggedUser = JSON.parse(sessionStorage.getItem("loginData"))._id
    let movieId = JSON.parse(sessionStorage.getItem("idMovie")).movieId
    let ownerMOvie =  JSON.parse(sessionStorage.getItem("loginData")).userId

      if(idLoggedUser !== ownerMOvie) {
         return await getLikeSpecificUser(movieId,idLoggedUser)
                        .then(x => {

                           if(x[0] === undefined) {
                            addLike(movieId)
                       
                           }else {
                            getMovieLikes(movieId)
                            .then(x => {
                              document.getElementById("likeBtn").innerHTML = `Liked ${x}`
                       })
                           }
                        })

         
      }
}


async function deleteMovieProcess() {
    let movieId = JSON.parse(sessionStorage.getItem("idMovie")).movieId

    return await deleteMovie(movieId)
                 .then(redirectToHomePage)
                 .catch(console.error)

}


export { displayDetailsMovie,clickLikeBtn,deleteMovieProcess }

