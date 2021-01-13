import { useFish } from './FishDataProvider.js'
import { Fish } from './fish.js'

export const FishList = () => {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__fishList")
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
            fishHTMLRepresentations += Fish(fish)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
        ${fishHTMLRepresentations}
        </article>
    `
}

