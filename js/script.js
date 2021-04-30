{
    const strongEURElement = document.querySelector(".js-section__EUR");
    const strongUSDElement = document.querySelector(".js-section__USD");
    const strongGBPElement = document.querySelector(".js-section__GBP");

    const welcome = () => {
        console.log("Hello world created by Krzysiu. Nice to be here");
    }

    const showResults = (eurRate, usdRate, gbpRate) => {
        strongEURElement.innerText = `${eurRate.toFixed(2)} €`;
        strongUSDElement.innerText = `${usdRate.toFixed(2)} $`;
        strongGBPElement.innerText = `${gbpRate.toFixed(2)} £`;
    }

    const onSubmitCalculation = e => {
        const amountElement = document.querySelector(".js-form__inputPLN");
        e.preventDefault();
        const pln = +amountElement.value;
        const eurRate = pln / 4.57;
        const usdRate = pln / 3.82;
        const gbpRate = pln / 5.26;
        showResults(eurRate, usdRate, gbpRate);
    }

    const resetForm = () => {
        strongEURElement.innerText = "";
        strongUSDElement.innerText = "";
        strongGBPElement.innerText = "";
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const buttonReset = document.querySelector(".js-form__buttonReset");
        formElement.addEventListener("submit", onSubmitCalculation);
        buttonReset.addEventListener("click", resetForm);
        welcome();
    }

    init()

}