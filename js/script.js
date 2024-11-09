// Input
const formElem = document.getElementById("user-form");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("username");

// Elementi card
const offerElem = document.getElementById("offer-card");
const priceElem = document.getElementById("price-card");
const nameElem = document.getElementById("name-card");
const coachElem = document.getElementById("coach-card");
const codeElem = document.getElementById("code-card");


// Evento click
formElem.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());
    const km = parseInt(kmInput.value.trim());

    // determinare sconto
    let discount20 = 20;
    let discount40 = 40;
    let tariff = "Tariffa Standard";

    let discount;
    if (age < 18) {
        discount = discount20;
        tariff = "Tariffa Minorenni";
    } else if (age > 65) {
        discount = discount40;
        tariff = "Tariffa Over 65";
    } else {
        discount = 0;
    }
    
    // prezzistica
    const standardPrice = km * 0.21;
    const discountRate = standardPrice / 100 * discount;
    const finalPrice = (standardPrice - discountRate).toFixed(2);

    // inserimento valori card
    offerElem.innerHTML = `${tariff}`;
    priceElem.innerHTML = `${finalPrice}€`;
    nameElem.innerHTML = `${username}`;
    coachElem.innerHTML = randomNum(1, 10);
    codeElem.innerHTML = randomNum(10000, 99999);

})

// numero random
/**
 * generare numero random tra min e max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNum(min, max) {
    return Math.floor(Math.random() * max) + min; 
}
