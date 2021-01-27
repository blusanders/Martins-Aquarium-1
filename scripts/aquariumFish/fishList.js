import { sortFish } from './fishDataProvider.js'
import { Fish } from './fish.js'

export const FishList = () => {
    
const contentElement = document.querySelector(".containerLeft")
const allFishArrays = sortFish()

contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
            <h2>Aquarium Fish</h2>
            ${allFishArrays.map(fishObj => Fish(fishObj)).join("")}
        </article>
    `
}