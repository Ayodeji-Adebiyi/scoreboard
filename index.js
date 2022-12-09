let homeCountEl = document.getElementById("home-count-el")
let guestCountEl = document.getElementById("guest-count-el")
let saveSummary = document.getElementById("save-summary")

let homeCount = 0
let guestCount = 0

function homeAddOne() {
    homeCount += 1
    homeCountEl.textContent = homeCount
}

function homeAddTwo() {
    homeCount += 2
    homeCountEl.textContent = homeCount
}

function homeAddThree() {
    homeCount += 3
    homeCountEl.textContent = homeCount
}

function guestAddOne() {
    guestCount += 1
    guestCountEl.textContent = guestCount
}

function guestAddTwo() {
    guestCount += 2
    guestCountEl.textContent = guestCount
}

function guestAddThree() {
    guestCount += 3
    guestCountEl.textContent = guestCount
}

function reset() {
    homeCountEl.textContent = 0
    guestCountEl.textContent = 0
    homeCount = 0
    guestCount = 0
}

function save() {
    message = "Home" + "(" + homeCountEl.textContent + ")" + " : " + "Guest" + "(" + guestCountEl.textContent + "), "
    saveSummary.textContent += message
}



