import { Tip } from "./Tip.js"
import { useTips } from "./TipDataProvider.js"

export const TipList = () => {
    const contentElement = document.querySelector(".containerRight")
    const tipArray = useTips()

    let tipHTML = ""
    for (const tipObj of tipArray) {
        tipHTML += Tip(tipObj)
    }

    contentElement.innerHTML += `
    <div>
        <h2>Martin's Tips</h2>
        ${tipHTML}
    </div>
    `
}     