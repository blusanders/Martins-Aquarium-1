import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".containerLeft")
    const locationArray = useLocation()

    let locationHTML = ""
    for (const locObj of locationArray) {
        locationHTML += Location(locObj)
    }

    contentElement.innerHTML += `
    <article class="containerLeft__travelLocations contentArticle">
                <h2>Harvest Locations</h2>
                ${locationHTML}
            </article>
    `
}        