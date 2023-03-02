

let isLoggedInView = () => {
    return `<li class="nav-item active">
                <a class="nav-link" href="/create">Create</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/logout">Logout</a>
            </li>`
}


let isNotLoggedInView = () => {
    return `<li class="nav-item" >
              <a class="nav-link" href="/login">Login</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/register">Register</a>
            </li>`
}

let navBar = (liContent) => {
    return ` <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container">
        <a class="navbar-brand" href="">
            <img src="./images/idea.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <a class="nav-link" href="/dashboard">Dashboard</a>
        </li>
                ${(liContent) ? liContent : ""}
            </ul>
        </div>
    </div>
</nav>`
}

let homeContainerWrapper = () => {
    return `<div class="container home wrapper  my-md-5 pl-md-5">
    <div class="d-md-flex flex-md-equal ">
        <div class="col-md-5">
            <img class="responsive" src="./images/01.svg" />
        </div>
        <div class="home-text col-md-7">
            <h2 class="featurette-heading">Do you wonder if your idea is good?</h2>
            <p class="lead">Join our family =)</p>
            <p class="lead">Post your ideas!</p>
            <p class="lead">Find what other people think!</p>
            <p class="lead">Comment on other people's ideas.</p>
        </div>
    </div>
    <div class="bottom text-center">
        <a class="btn btn-secondary btn-lg " href="">Get Started</a>
    </div>
</div>
`
}

let footer = () => {
    return ` <footer class="footer">
                <div class="container-footer">
                  <span>© We cherish your ideas! Share them with others!</span>
                </div>
             </footer>`
}


export {
    navBar,
    isLoggedInView,
    isNotLoggedInView,
    homeContainerWrapper,
    footer
}