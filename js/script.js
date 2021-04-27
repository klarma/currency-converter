let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-form__inputPLN");
let strongEURElement = document.querySelector(".js-section__EUR");
let strongUSDElement = document.querySelector(".js-section__USD");
let strongGBPElement = document.querySelector(".js-section__GBP");
let buttonReset = document.querySelector(".js-form__buttonReset");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let pln = +amountElement.value;
    let eurRate = pln / 4.57;
    let usdRate = pln / 3.82;
    let gbpRate = pln / 5.26;
    strongEURElement.innerText = `${eurRate.toFixed(2)} €`;
    strongUSDElement.innerText = `${usdRate.toFixed(2)} $`;
    strongGBPElement.innerText = `${gbpRate.toFixed(2)} £`;
})

buttonReset.addEventListener("click", ()=>{
    strongEURElement.innerText="";
    strongUSDElement.innerText="";
    strongGBPElement.innerText="";
})



