let templateCat = ({id, statusCode, statusMessage, imageLocation}) => {
    return ` <li>
    <img src="./images/${imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${id}">
            <h4>Status Code: ${statusCode}</h4>
            <p>${statusMessage}</p>
        </div>
    </div>
</li>`
}




export { templateCat }