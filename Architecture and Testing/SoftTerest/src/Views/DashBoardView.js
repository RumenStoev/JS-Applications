let ideaView = (img, title, _id) => {

    return `
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;" id="${_id}">
        <div class="card-body">
            <p class="card-text">${title}</p>
        </div>
        <img class="card-image" src="${img}" alt="Card image cap">
        
        <a class="btn" href="/details/id" >Details</a>
        
    </div>
`
}

let noIdeasView = () =>  ` <h1>No ideas yet! Be the first one :)</h1>`



let navBarDashboardView = (ideas) => {

    return `<nav class="navbar navbar-expand-lg navbar-light bg-light ">
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
            
                <li class="nav-item active">
                        <a class="nav-link" href="/create">Create</a>
                    </li>
                <li class="nav-item" >
                        <a class="nav-link" href="/logout">Logout</a>
                </li>
              </ul>
          </div>
      </div>
    </nav>
   <div id="dashboard-holder">
      ${ideas ? ideas : ""} 
  </div>
`
}


export { ideaView,noIdeasView,navBarDashboardView }