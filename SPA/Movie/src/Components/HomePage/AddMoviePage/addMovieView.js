import { checkLoggedEmail } from "../../../Utils/filters.js"

let addMovieTemplate = () => {
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
    <section id="add-movie" class="view-section">
        <form
          id="add-movie-form"
          class="text-center border border-light p-5"
          action="#"
          method=""
        >
          <h1>Add Movie</h1>
          <div class="form-group">
            <label for="title">Movie Title</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="Title"
              name="title"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
              class="form-control"
              placeholder="Description"
              name="description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
              id="imageUrl"
              type="text"
              class="form-control"
              placeholder="Image Url"
              name="img"
              value=""
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
    `
}


let movieTemplate = ({title,description,img}) => {
  
  return `

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


  `
}

export { addMovieTemplate,movieTemplate }

