export const Quote = (quote) => {
    return `
    <div class="quoteCard card">
        <p class="quoteCard__text">${quote.text}</p>
        <p class="quoteCard__author">${quote.author}</p>
        <p class="quoteCard__location">${quote.location}</p>
    </div>
    `
}