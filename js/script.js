// Input
const formElem = document.getElementById("user-form");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");

// Elementi card
const offer = document.getElementById("offer-card");
const price = document.getElementById("price-card");

// Evento click
formElem.addEventListener("submit", function(event) {
    event.preventDefault();

    const age = parseInt(ageInput.value.trim());
    const km = parseInt(kmInput.value.trim());

    // determinare sconto
    let discount20 = 20;
    let discount40 = 40;
    let tariff = "Standard";

    let discount;
    if (age < 18) {
        discount = discount20;
        tariff = "Minorenni";
    } else if (age > 65) {
        discount = discount40;
        tariff = "Over 65";
    } else {
        discount = 0;
    }
    
    // prezzistica
    const standardPrice = km * 0.21;
    const discountRate = standardPrice / 100 * discount;
    const finalPrice = (standardPrice - discountRate).toFixed(2);

    // inserimento valori card
    offer.innerHTML = `${tariff}`;
    price.innerHTML = `${finalPrice}€`
})
