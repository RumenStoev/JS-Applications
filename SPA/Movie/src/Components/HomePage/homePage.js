import { getMovies } from "../../Utils/requests.js"
import { displayMovies } from "../../Utils/filters.js"



async function homePageDisplayProcess() { 
   
      return await getMovies()
                 .then(displayMovies)
                 .catch(console.error)
                   
}




export { homePageDisplayProcess }
