const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("rideTicketPurchased", customEvent => {
    contentTarget.innerHTML += `<div class="person rider">
        </div>`
})

export const ticketHopeful = () => { }