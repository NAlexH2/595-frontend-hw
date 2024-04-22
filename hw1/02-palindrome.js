const inputElem = document.querySelector("input");
const NOT_A_NUMBER = "Not a number.";
const POSITIVES_ONLY = "Input cannot be less than 0.";
const NOT_PALINDROME = "No. Try again";
const IS_PALINDROME = "Yes! This number is a palindrome!";

inputElem.addEventListener("input", handleInput);

function inputVerify(input) {
    const verifyResult = isNaN(input) === true || input.length === 0;
    return verifyResult;
}

function dangerElem(message) {
    const modElem = document.getElementById("input-result");
    modElem.classList = "";
    modElem.classList.add("text-danger");
    modElem.textContent = message;
    return;
}

function successElem(message) {
    const modElem = document.getElementById("input-result");
    modElem.classList = "";
    modElem.classList.add("text-success");
    modElem.textContent = message;
    return;
}

function handleInput() {
    const receivedInput = inputElem.value;
    const inputReversed = Array.from(receivedInput).reverse().join("");

    if (inputVerify(receivedInput)) {
        dangerElem(NOT_A_NUMBER);
        return;
    } else if (Number(receivedInput) < 0) {
        dangerElem(POSITIVES_ONLY);
        return;
    } else if (receivedInput !== inputReversed) {
        dangerElem(NOT_PALINDROME);
        return;
    }

    elemRes = successElem(IS_PALINDROME);
}
