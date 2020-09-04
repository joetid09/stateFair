const contentElement = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("foodTicketPurchased", foodEvent => {
    contentElement.innerHTML += `<div class="person eater"></div>`
})

export const createFoodMarks = (foodStuff => {

})