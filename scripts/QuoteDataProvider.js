const quoteCollection = [
    {
        text: "Ambitious travel is about embarking on a long-term adventure that others could only dream of.",
        author: "Chris Bush, 'Aussie on the Road'",
        location: "Australia",
    },

    {
        text: "It's organic. It's like the river. One stream comes in and it meets another stream and becomes the Amazon.",
        author: "Sam Pressman",
        location: "Amazon River",
    },

    {
        text: "Travel safe, travel far, travel wide, and travel often.",
        author: "Matt 'Nomadic Matt' Kepnes",
        location: "Fraser Island, Australia",
    },
]

export const useQuote = () => {
    return quoteCollection.slice()
}