async function getInfo() {
  const inputData = document.getElementById("stopId");
  const stopName = document.getElementById("stopName");
  const listBuses = document.getElementById("buses");

  const request = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${inputData.value}`)
	
   try {
	
	 let data = await request.json();
	 
       stopName.innerHTML = data.name;
	 
	 Object.entries(data.buses).forEach(([busId,time]) => {
		
        insertBusData(busId,time)
	 }) 
	
       	  
   } catch {
	   listBuses.innerHTML = ""
	   stopName.innerHTML = "Error"
   }

   function insertBusData(busId,time) {
	     let li = document.createElement("li");
	     let template = `Bus ${busId} arrives in ${time} minutes`
	         li.innerHTML = template;
                 listBuses.appendChild(li)
   }
}

