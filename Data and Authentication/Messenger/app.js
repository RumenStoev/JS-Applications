let url = "http://localhost:3030/jsonstore/messenger"

let sendData = async(url,data) => {
    return await fetch(url,{
          method: "post",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(data)
    })
     
}

let displayData = (data) => Object.values(data).map(x => `${x.author}: ${x.content}`).join('\n')

let sendDataToServer = async () => {
    let author = document.getElementById("author")
    let content = document.getElementById("content");
      
    await sendData(url,{author: author.value,content: content.value})
}

let receiveDataFromServer = async() => {
    let messages = document.getElementById("messages")
    let getData = await fetch(url);
    let result = await getData.json();

       messages.value = displayData(result,messages)
}




async function solve() {
  let buttonSend = document.getElementById("submit");
  let buttonReflesh = document.getElementById("refresh")

    buttonSend.addEventListener("click", async() => sendDataToServer())
    buttonReflesh.addEventListener("click",async() => receiveDataFromServer())

 } 

 solve()

        
        
