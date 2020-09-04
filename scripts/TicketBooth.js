const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket") {
        console.log("if statement passed")
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketPurchased: "ticket"
            }
        })
        eventHub.dispatchEvent(rideEvent)
        console.log(rideEvent)
    }
    else if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticketPurchased: "food ticket"
            }
        })
        eventHub.dispatchEvent(foodEvent)
        console.log("food if statement passed")
    }
    else if (event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticketPurchased: "game ticket"
            }
        })
        eventHub.dispatchEvent(gameEvent)
        console.log("gameEvent passed")
    }
    else if (event.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticketPurchased: "sideshow ticket"
            }
        })
        eventHub.dispatchEvent(sideshowEvent)
    }
    else if (event.target.id === "fullPackage") {
        const fullPackageEvent = new CustomEvent("fullPackageTicket", {
            detail: {
                ticketPurchased: "full package ticket"
            }
        })
        eventHub.dispatchEvent(fullPackageEvent)
        console.log("Full package passeds")
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackage">Full Package Ticket</button>
        </div>
    `
}

