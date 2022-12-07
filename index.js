

let homecountEl = document.getElementById('home-count-el')

let homeCount = 0

function hadd1() {

    homeCount += 1
    homecountEl.textContent = homeCount


}

function hadd2() {

    homeCount += 2
    homecountEl.textContent = homeCount


}

function hadd3() {

    homeCount += 3
    homecountEl.textContent = homeCount

}


let guestcountEl = document.getElementById('guest-count-el')

let guestCount = 0

function gadd1() {

    guestCount += 1
    guestcountEl.textContent = guestCount

}

function gadd2() {

    guestCount += 2
    guestcountEl.textContent = guestCount


}

function gadd3() {

    guestCount += 3
    guestcountEl.textContent = guestCount

}

function reset() {

    guestcountEl.textContent = 0
    guestCount -= guestCount
    homecountEl.textContent = 0
    homeCount -= homeCount

}
