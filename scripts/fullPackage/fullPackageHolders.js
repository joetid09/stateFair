const contentFoodElement = document.querySelector(".food")
const contentGameElement = document.querySelector(".games")
const contentSideShowElement = document.querySelector(".sideshow")
const contentRideElement = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("fullPackageTicket", fullPackageEvent => {
    contentFoodElement.innerHTML += `<div class="person bigSpender"></div>`
    contentGameElement.innerHTML += `<div class="person bigSpender"></div>`
    contentSideShowElement.innerHTML += `<div class="person bigSpender"></div>`
    contentRideElement.innerHTML += `<div class="person bigSpender"></div>`
})

export const fullPack = () => { }
