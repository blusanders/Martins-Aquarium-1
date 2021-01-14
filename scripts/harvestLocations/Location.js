export const Location = (location) => {
    return `
    <div class="locationCard card">
        <img src="${location.image}">
        <p class="locationCard__city">${location.city}</p>
        <p class="locationCard__country">${location.country}</p>
        <p class="locationCard__water">${location.water}</p>
    </div>
    `
}