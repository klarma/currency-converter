{
    const amountElement = document.querySelector(".js-form__inputPLN");
    const resultElement = document.querySelector(".js-section__paragraph");

    const welcome = () => {
        console.log("Hello world created by Krzysiu. Nice to be here");
    };

    const showResults = (pln, currency, result) => {
        resultElement.innerHTML = `${pln} zł to <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const calculateResult = (currency, pln) => {
        switch (currency) {
            case "EUR":
                return pln / 4.57;
            case "USD":
                return pln / 3.82;
            case "GBP":
                return pln / 5.26;
        };
    };

    const onFormSubmit = e => {
        e.preventDefault();

        const pln = +amountElement.value;
        const currency = document.querySelector(".js-form__select").value;
        const result = calculateResult(currency, pln);

        showResults(pln, currency, result);
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