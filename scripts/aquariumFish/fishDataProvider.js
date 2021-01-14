const fishCollection = [
    {
        name: "Betta Midler", 
        image: "images/betta.jpg",
        species: "Betta",
        location: "Chao Phraya, Thailand",
        length: "6–8 cm",
        diet: "Zooplankton, Crustaceans, Insect Larvae"
    },

    {
        name: "Gillian 'Gill' Anderson", 
        image: "images/angel-fish.jpg",
        species: "Angel Fish",
        location: "Orinoco River, Venezuela",
        length: "7 in",
        diet: "Worms, Small Crustaceans"
    },

    {
        name: "Guppie Goldberg", 
        image: "images/guppie.jpeg",
        species: "Dragon Big Ear Guppy",
        location: "Fernando de Noronha, Brazil",
        length: "1 in - 2 in",
        diet: "Algae, Bloodworms, Brine Shrimp",
    },

    {
        name: "Jojo Seawa", 
        image: "images/pleco.jpeg",
        species: "Zebra Pleco",
        location: "Xingu River, Brazil",
        length: "3 in - 4 in",
        diet: "Brine Shrimp, Bloodworms, Algae"
    },

    {
        name: "Bubble Fett", 
        image: "images/goldfish.jpeg",
        species: "Black Oranda Goldfish",
        location: "China",
        length: "10 in",
        diet: "Insects, Crustaceans, Plants"
    },

    {
        name: "Tetra Collins", 
        image: "images/tetra.jpeg",
        species: "Emperor Tetra",
        location: "San Juan River, Colombia",
        length: "2 in",
        diet: "Daphnia, Mosquito Larvae"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}