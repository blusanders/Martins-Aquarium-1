import { useQuote } from './QuoteDataProvider.js'
import { Quote } from './Quote.js'

export const QuoteList = () => {
    const placementContainer = document.querySelector(".containerLeft")
    const quotesArray = useQuote()
    
    let quoteHTML = ""
    for (const quoteObj of quotesArray) {
            quoteHTML += Quote(quoteObj)
    }

    placementContainer.innerHTML += `
        <article class="containerLeft__quoteList contentArticle">
            <h2>Travel Quotes</h2>
            ${quoteHTML}
        </article>
    `
}