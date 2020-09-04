const contentElement = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("sideshowTicketPurchased", sideshowEvent => {
    contentElement.innerHTML += `<div class="person gawker"></div>`
})

export const sideshowHTML = () => { }
