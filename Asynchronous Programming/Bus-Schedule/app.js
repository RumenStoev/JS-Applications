 function solve() {
    const infoBus = document.querySelector("#info > span");
    const buttonDepart = document.getElementById("depart");
    const buttonArrive = document.getElementById("arrive");
    
    let nextStop = "depot"
    let dataName = ""

    async function depart() {
       takeInfoBus(nextStop);
       templateInfo(`Next stop ${dataName}`,true,false)
    }

    async function arrive() {
          takeInfoBus(nextStop)
          templateInfo(`Arriving at ${dataName}`,false,true)

    }

    async function takeInfoBus(name) {
       try { 
            let response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${name}`)
            let data = await response.json();
                dataName = data.name;
            
       } catch(e) {
           infoBus.innerHTML = "Error"
           buttonDepart.disabled = true;
           buttonArrive.disabled = false;
       }
    }

    function templateInfo(text,disabledDepart,disabledArrive) {
        infoBus.innerHTML = text;
        buttonDepart.disabled = disabledDepart
        buttonArrive.disabled = disabledArrive
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
