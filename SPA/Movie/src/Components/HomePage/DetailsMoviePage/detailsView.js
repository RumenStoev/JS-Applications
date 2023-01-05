import { checkLoggedEmail} from "../../../Utils/filters.js"
 
let detailsTemplate = ({title,img,description},fn) => {
     
    return `
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-light" href="/" id="header-nav-bar">Movies</a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item user">
       
        <a class="nav-link" id="welcome-msg">Welcome, ${checkLoggedEmail()}</a>
      </li>
      <li class="nav-item user" id="logout">
        <a class="nav-link" href="/logout">Logout</a>
      </li>
    </ul>
  </nav>
    <section id="movieDetails" class="view-section">
    <div class="container">
      <div class="row bg-light text-dark">
        <h1 id="movieTitle">Movie title: ${title}</h1>

        <div class="col-md-8">
          <img
            class="img-thumbnail"
            src="${img}"
            alt="Movie"
          />
        </div>
        <div class="col-md-4 text-center">
          <h3 class="my-3">Movie Description</h3>
          <p>
            ${description}
          </p>
          ${fn()}
        </div>
      </div>
    </div>
  </section>
    `
}



export { detailsTemplate }



