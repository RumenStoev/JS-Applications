function displayPage(contentPage) {

    if (typeof contentPage === "string") {


        let displayRoot = document.getElementById("root");

        return displayRoot.innerHTML = contentPage
    }
}




export { displayPage }