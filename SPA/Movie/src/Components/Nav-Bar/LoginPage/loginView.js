let loginTemplate = () => {
  
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand text-light" href="/" id="header-nav-bar">Movies</a>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item guest" id="login">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item guest" id="register">
            <a class="nav-link" href="http://localhost:4000/register">Register</a>
          </li>
        </ul>
      </nav>
    

    <section id="form-login" class="view-section">
        <form
          id="login-form"
          class="text-center border border-light p-5"
          action=""
          method=""
        >
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </section>
    `
}



export { loginTemplate }
