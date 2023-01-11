import { renderAllRowns, searchTargetInTable } from "./helpers.js";
import { getDataServer } from "./requests.js";
import { tableSearchTemplate } from "./template.js";


function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   renderAllRowns(getDataServer, tableSearchTemplate)

   function onClick() {
      searchTargetInTable()
   }
}

solve()