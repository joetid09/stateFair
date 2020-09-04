const contentElement = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("gameTicketPurchased", gameEvent => {
    contentElement.innerHTML += `<div class="person player"></div>`
})

export const gamers = () => { }
