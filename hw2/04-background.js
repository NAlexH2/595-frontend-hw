// Add your code here

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "rgb(108, 97, 219)";
});

const intervalID = [];

document.getElementById("actionButton").addEventListener("click", buttonListen);

const randColor = function getRandomColor() {
    const randRed = Math.floor(Math.random() * 256);
    const randGreen = Math.floor(Math.random() * 256);
    const randBlue = Math.floor(Math.random() * 256);
    const randAlpha = Math.random() * (0.7 - 0.3) + 0.3;
    return (
        "background-color: rgba(" +
        [randRed, randGreen, randBlue, randAlpha].join(", ") +
        ")"
    );
};

const randomizeBackground = function changeBackgroundRandomly() {
    const userInput = document.getElementById("userInput");
    const secondsValue = parseInt(userInput.value);
    if (intervalID.length === 0) {
        intervalID.push(
            setInterval(() => {
                document.body.style = randColor();
            }, secondsValue * 1000)
        );
    }
};

const changeButton = function changeButtonStyle(newText, newColor) {
    const buttonGet = document.getElementById("actionButton");
    buttonGet.value = newText;
    buttonGet.className = `btn ${newColor}`;
    return;
};

const stopRandom = function stopTheRandomizer() {};

function buttonListen() {
    const buttonText = document.getElementById("actionButton").value;
    if (buttonText === "Start") {
        changeButton("Stop", "btn-danger");
        randomizeBackground();
    } else {
        changeButton("Start", "btn-primary");
        clearInterval(intervalID.pop());
    }
}
