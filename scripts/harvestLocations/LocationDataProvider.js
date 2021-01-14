const locationCollection = [
    {
        image: "images/bangkok.jpeg",
        city: "Bangkok",
        country: "Thailand",
        water: "Chao Phraya River"

    },
 
    {
        image: "images/guayana.jpeg",
        city: "Guayana City",
        country: "Venezuela",
        water: "Orinoco River Basin"
    },

    {
        image: "images/brazil.jpeg",
        city: "Fernando de Noronha",
        country: "Brazil",
        water: "Atlantic Ocean"
    },

    {
        image: "images/altamira.jpeg",
        city: "Altamira",
        country: "Brazil",
        water: "Xingu River"
    },

    {
        image: "images/hongkong.jpeg",
        city: "Kau Sai Chuau",
        country: "China, Hong Kong",
        water: ""
    },

    {
        image: "images/colombia.jpeg",
        city: "",
        country: "Colombia",
        water: "San Juan River Basin"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}