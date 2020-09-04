const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    console.log("if statement passed")
    const rideEvent = new CustomEvent("rideTicketPurchased", {
        detail: {
            ticketPurchased: "ticket"
        }
    })
    eventHub.dispatchEvent(rideEvent)
    console.log(rideEvent)
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

