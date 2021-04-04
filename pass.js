
const resultEl = document.getElementById("screen");
const saveEl = document.getElementById("save");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("result");

generateEl.addEventListener("click", () => {

    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;


    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);

});

// object for storing the functions 
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate password Function

function generatePassword(lower, upper, number, symbol, length) {
    // initiate password variable
    let generatedPassword = " ";
    const typesCount = lower + upper + number + symbol;

    // filter out unchecked types
    const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return " ";
    }
    if (length >= 20) {
        alert("Maximum Characters should be less than 20.")
        return "";
    }

    for (let i = 0; i < length; i += typesCount) {
        typeArr.forEach(type => {
            const objName = Object.keys(type)[0];
            generatedPassword += randomFunc[objName]();
        });
    }
    const finalAnswer = generatedPassword.slice(0, length);
    return finalAnswer;

}

// Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor((Math.random() * 26) + 97));
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor((Math.random() * 10) + 48));
}
function getRandomSymbol() {
    let symbols = '~!@#$%^&*()_-={}[]\|`+';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
