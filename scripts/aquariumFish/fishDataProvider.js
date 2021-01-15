const fishCollection = [
    {
        name: "Betta Midler", 
        image: "images/betta.jpg",
        species: "Betta",
        location: "Chao Phraya, Thailand",
        length: 6,
        diet: "Zooplankton, Crustaceans, Insect Larvae"
    },

    {
        name: "Tetra Collins", 
        image: "images/tetra.jpeg",
        species: "Emperor Tetra",
        location: "San Juan River, Colombia",
        length: 2,
        diet: "Daphnia, Mosquito Larvae"
    },

    {
        name: "Gillian 'Gill' Anderson", 
        image: "images/angel-fish.jpg",
        species: "Angel Fish",
        location: "Orinoco River, Venezuela",
        length: 12,
        diet: "Worms, Small Crustaceans"
    },

    {
        name: "Guppie Goldberg", 
        image: "images/guppie.jpeg",
        species: "Dragon Big Ear Guppy",
        location: "Fernando de Noronha, Brazil",
        length: 2,
        diet: "Algae, Bloodworms, Brine Shrimp",
    },

    {
        name: "Bubble Fett", 
        image: "images/goldfish.jpeg",
        species: "Black Oranda Goldfish",
        location: "China",
        length: 5,
        diet: "Insects, Crustaceans, Plants"
    },
    
    {
        name: "Jojo Seawa", 
        image: "images/pleco.jpeg",
        species: "Zebra Pleco",
        location: "Xingu River, Brazil",
        length: 10,
        diet: "Brine Shrimp, Bloodworms, Algae"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
            console.log(holyFish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
            console.log(soldiers)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
            console.log(regularFish)
        }
    }
    return regularFish
}