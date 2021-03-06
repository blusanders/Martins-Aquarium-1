export const Fish = (fish) => {
    return `   
    <section class="fishCard card">
            <div><img  class="fishCard__image image--card" src="${fish.image}" /></div>
            <div class="fishCard__name">${fish.name}</div>
            <div class="fishCard__species">${fish.species}</div>
            <div class="fishCard__length">${fish.length}</div>
            <div class="fishCard__location">${fish.location}</div>
            <div class="fishCard__diet">${fish.food}</div>
        </section>
    `
}