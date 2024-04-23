// Add your code here

document.getElementById("searchButton").addEventListener("click", handleClick);
const inputElem = document.getElementById("userInput");

const getResElem = function getResultElement() {
    return document.getElementById("searchResult");
};

const checkEmpty = function checkInputEmpty(value) {
    return value.length === 0;
};

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

const getChars = function getCharacterData(searchValue) {
    return characters.filter((character) =>
        character.name.toLowerCase().includes(searchValue.toLowerCase())
    );
};

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
