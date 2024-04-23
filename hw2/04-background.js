// Set the default background color here cuz why not. I could do it in the html
// but we're doing most of the work here anyways.
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "rgb(108, 97, 219)";
});

// used to stop the interval
const intervalID = [];

// add a click listener to the button
document.getElementById("actionButton").addEventListener("click", buttonListen);

// Neatly generate the string for the random color to modify the style
const randColor = function getRandomColor() {
    const randRed = Math.floor(Math.random() * 256);
    const randGreen = Math.floor(Math.random() * 256);
    const randBlue = Math.floor(Math.random() * 256);
    const randAlpha = Math.random() * (0.7 - 0.3) + 0.3;
    return `background-color: rgba( ${randRed}, ${randGreen}, ${randBlue}, ${randAlpha})`;
};

// randomize the background with an interval
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

// Modify button style and text based on current state.
const changeButton = function changeButtonStyle(newText, newColor) {
    const buttonGet = document.getElementById("actionButton");
    buttonGet.value = newText;
    buttonGet.className = `btn ${newColor}`;
    return;
};

// Where the work happens. Call clear interval with that global array because
// when interval is called it provides an ID and is then popped to be used as
// the id in the clearInterval line.
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
