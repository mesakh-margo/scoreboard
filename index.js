let homeScoreEl = document.getElementById("score-home")
let guestScoreEl = document.getElementById("score-guest")
let guestScore = 0
let homeScore = 0

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}