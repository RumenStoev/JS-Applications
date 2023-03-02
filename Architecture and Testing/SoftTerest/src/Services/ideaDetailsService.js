import { IdeaDetailPage } from "../BuiltPages/IdeaDetailsPage.js";
import { displayIdeaDetail } from "../Helpers/ideaDetails.js";
import { takeIdeasDetail } from "../Helpers/requests.js";
import { ideaDetailsView } from "../Views/IdeaDetailsView.js";


async function showIdeaDetails(target) {

    let idIdea = target.parentNode.id;

    let ideaDetail = await takeIdeasDetail(idIdea)
                            .then(data => displayIdeaDetail(data,ideaDetailsView))
                            .catch(console.error)

    return IdeaDetailPage(ideaDetail)
}





export { showIdeaDetails }