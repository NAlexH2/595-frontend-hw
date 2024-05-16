// Add your code here

document.getElementById("searchButton").addEventListener("click", handleClick);
const inputElem = document.getElementById("userInput");

// function to get the element I'm modifying most in this exercise.
const getResElem = function getResultElement() {
    return document.getElementById("searchResult");
};

// simple quick empty check
const checkEmpty = function checkInputEmpty(value) {
    return value.length === 0;
};

// If the search was empty, let em know.
const searchEmpty = function noDataToSearch() {
    const resultElem = getResElem();
    const newP = document.createElement("p");
    newP.className =
        "d-flex justify-content-center text-center text-danger fs-4";
    newP.innerText = `Please enter part of a Starwars character name 
    to get information before clicking search.`;
    resultElem.appendChild(newP);
    return;
};

// Quick filter from the data.js file to find all the characters I want with
// names that just include (as a substring) the search val
const getChars = function getCharacterData(searchValue) {
    return characters.filter((character) =>
        character.name.toLowerCase().includes(searchValue.toLowerCase())
    );
};

// Create new cards for every character provided. Doing this by creating a new
// 'floating' element then appending them in the correct order before
// conducting work. Using regex to do the replace for the mark html5 element
// See my 02-search.html for the style mod for the mark element to make it
// stand out more.
const characterCards = function buildCharacterCards(relevantChars, searchVal) {
    const resultElem = getResElem();
    const regex = new RegExp(`${searchVal}`, "gi");
    for (const character of relevantChars) {
        const cleanCards = document.createElement("div");
        const cardBody = document.createElement("div");
        const cardTitleH5 = document.createElement("h5");
        const cardTextP = document.createElement("p");
        cleanCards.className = "card col-4 me-2 mt-2";

        cleanCards.append(cardBody);
        cardBody.className = "card-body text-center";

        cardBody.append(cardTitleH5);
        cardTitleH5.className = "card-title fs-5";
        cardTitleH5.textContent = character.name;
        if (regex.test(cardTitleH5.innerHTML)) {
            cardTitleH5.innerHTML = cardTitleH5.innerHTML.replace(
                regex,
                `<mark>${searchVal}</mark>`
            );
        }

        cardBody.append(cardTextP);
        cardTextP.textContent = `Birth Year: ${character.birth_year}`;

        resultElem.append(cleanCards);
    }
    return;
};

// Lets handle some clicking :)
function handleClick() {
    const searchVal = inputElem.value;
    if (checkEmpty(searchVal)) {
        getResElem().innerHTML = "";
        searchEmpty();
    } else {
        getResElem().innerHTML = "";
        const relevantChars = getChars(searchVal);
        characterCards(relevantChars, searchVal);
    }

    return;
}
