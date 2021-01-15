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

export const useAllFish = () => {
    return fishCollection.slice()
}

export const sortFish = () => {
    const holyFish = []
    const soldiers = []
    const regularFish = []
    let allTheFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        } else if (fish.length % 5 === 0) {
            soldiers.push(fish)
        } else {
            regularFish.push(fish)
        }
    } 

    allTheFish = holyFish.concat(soldiers, regularFish)
    return allTheFish
}
