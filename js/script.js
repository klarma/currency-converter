{
    const amountElement = document.querySelector(".js-form__inputPLN");
    const resultElement = document.querySelector(".js-section__paragraph");

    const welcome = () => {
        console.log("Hello world created by Krzysiu. Nice to be here");
    };

    const showResults = (pln, result, currency) => {
        resultElement.innerHTML = `${pln} zł to <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const calculateResult = (currency, pln) => {
        let result;

        switch (currency) {
            case "EUR":
                result = pln / 4.57;
            case "USD":
                result = pln / 3.82;
            case "GBP":
                result = pln / 5.26;
        };

        showResults(pln, result, currency);
    };

    const onFormSubmit = e => {
        e.preventDefault();

        const pln = +amountElement.value;
        const currency = document.querySelector(".js-form__select").value;

        calculateResult(currency, pln);
    };

    const resetForm = () => {
        resultElement.innerText = "";
        amountElement.focus();
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const buttonReset = document.querySelector(".js-form__buttonReset");

        formElement.addEventListener("submit", onFormSubmit);
        buttonReset.addEventListener("click", resetForm);

        welcome();
    };

    init();
}