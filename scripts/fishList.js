import { useFish } from './fishDataProvider.js'
import { Fish } from './fish.js'

export const FishList = () => {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft")
    const fishArray = useFish()

    let fishHTML = ""
    for (const fishObj of fishArray) {
           fishHTML += Fish(fishObj)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
            <h2>Aquarium Fish</h2>
            ${fishHTML}
        </article>
    `
}

