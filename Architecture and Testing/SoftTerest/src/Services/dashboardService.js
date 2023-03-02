import { displayAllIdeas } from "../Helpers/dashboardHelper.js"

import { ideaView, noIdeasView } from "../Views/DashBoardView.js";
import { takeIdeasDashboard } from "../Helpers/requests.js";


async function takeAllIdeas() {


    let dashboardIdeas = await takeIdeasDashboard()
        .then(data => displayAllIdeas(data, ideaView, noIdeasView))
        .catch(console.error)

    return dashboardIdeas

}


export { takeAllIdeas }


