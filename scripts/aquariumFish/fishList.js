import { sortFish } from './fishDataProvider.js'
import { Fish } from './fish.js'


let fishHTML = ""
const buildFishHTML = (fishArray) => {
    for (const fishObj of fishArray) {
        fishHTML += Fish(fishObj)
    }
    return fishHTML
}

export const FishList = () => {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft")

    const allFishArrays = sortFish()
    
    buildFishHTML(allFishArrays)

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
            <h2>Aquarium Fish</h2>
            ${fishHTML}
        </article>
    `
}
