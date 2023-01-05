import { checkLoggedEmail, isLogged } from "../../Utils/filters.js"
import { homePageDisplayProcess } from "./homePage.js"

let homeTemplate = () => {
  homePageDisplayProcess()
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
          <li class="nav-item guest" id="login">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item guest" id="register">
            <a class="nav-link" href="/register">Register</a>
          </li>
        </ul>
      </nav>
      <section id="home-page" class="view-section">
      <div
      class="jumbotron jumbotron-fluid text-light"
      style="background-color: #343a40"
      >
      <img
          src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
          class="img-fluid"
          alt="Responsive image"
          style="width: 150%; height: 200px"
      />
      <h1 class="display-4">Movies</h1>
      <p class="lead">
          Unlimited movies, TV shows, and more. Watch anywhere. Cancel
          anytime.
      </p>
      </div>

      <h1 class="text-center">Movies</h1>

      <section id="add-movie-button" class="user" style="display:${isLogged()}">
        <a href="#" class="btn btn-warning">Add Movie</a>
      </section>
    
      <section id="movie">
      <div class="mt-3">
        <div class="row d-flex d-wrap">
          <ul
            id="movies-list"
            class="card-deck d-flex justify-content-center"
          >
            
          </ul>
        </div>
      </div>
    </section>
    </section>
        `
}



export { homeTemplate }
