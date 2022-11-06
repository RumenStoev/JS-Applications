let addEventEachTopic = async() => await [...document.querySelectorAll(".topic-container")].forEach(x => {
    
    x.addEventListener("click",(e) => {
    e.preventDefault()
   
     window.location.assign("http://localhost:4000/theme-content.html")
   })
})


export { addEventEachTopic }
