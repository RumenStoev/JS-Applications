let articleList = async(url) => {
    try{
        let response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/${url}`)
        let data = await response.json();
        return data;

    }catch(e) {
        throw new Error(e)
    }
}

let structureTemplate = (text,id,info) => {
    let containerArticles = document.getElementById("main");
    let divAccordion = document.createElement("div")
        divAccordion.className = "accordion";  
    let template = `
      <div class="head">
          <span>${text}<span>
          <button class="button" id=${id}>More</button>
      </div>
      <div class="extra">
         <p>${info}</p>
      </div>       
    `
    divAccordion.innerHTML = template

    let button = divAccordion.querySelector("button")
        button.addEventListener("click",function(event) {
           let currExtra = divAccordion.querySelector(".extra") 
              if(button.textContent === "More") {
                 currExtra.style.display = "block"
                 button.textContent = "Less"
              }else {
                 currExtra.style.display = "none"
                 button.textContent = "More"
              } 
        })

    containerArticles.appendChild(divAccordion)
}
 

async function solution() {
     let dataList = await articleList("list");
      dataList.map(item => {
          let[id,title] = Object.values(item);
          let moreInfoArticle = articleList(`/details/${id}`)
          
          moreInfoArticle.then(info => {
              structureTemplate(title,id,info.content)
            
          })
      }) 
}


solution()
