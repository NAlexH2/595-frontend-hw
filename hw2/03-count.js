// Using a const to just load it from here instead of fixed on the page.
// Doing this so that it's easier to refresh the context of what we are searching
// and not having to worry about story and moving it all over the place.
const searchContext = `
It was the best of times, it was the worst of times, it was
the age of wisdom, it was the age of foolishness, it was the
epoch of belief, it was the epoch of incredulity, it was the
season of Light, it was the season of Darkness, it was the
spring of hope, it was the winter of despair, we had
everything before us, we had nothing before us, we were all
going direct to Heaven, we were all going direct the other
way—in short, the period was so far like the present period,
that some of its noisiest authorities insisted on its being
received, for good or for evil, in the superlative degree of
comparison only.
`;

// Lets load in the above context!
document.addEventListener("DOMContentLoaded", () => {
    const contextElem = document.getElementById("toSearch");
    contextElem.textContent = searchContext;
});

// Just tracking the input and adding an event listener to it. Could just add
// it directly with out the var and that's fine too.
const input = document.getElementById("userInput");
input.addEventListener("keydown", handleKeyDown);

// Access the most modified element in the doc with ease, again!
const getContElement = function getContElement() {
    return document.getElementById("toSearch");
};

// Very easy regex function to highlight words by modifying the inner html.
// I'd rather *not* do this, but I think it's okay. Doing it any other way would
// not be fun. If the regex fails just reset the search.
const highLightWords = function highlightAllWords(searchVal) {
    const regex = new RegExp(`${searchVal}`, "gi");
    const contextElem = getContElement();
    if (regex.test(contextElem.innerHTML)) {
        contextElem.innerHTML = contextElem.innerHTML.replace(
            regex,
            `<mark>${searchVal}</mark>`
        );
    } else {
        contextElem.innerHTML = searchContext;
    }
};

// Check if our user has hit enter, other wise do nothing! If they do, either
// refresh because the length of the search was 0, or go off and highlight!
function handleKeyDown(event) {
    if (event.keyCode === 13) {
        const searchVal = document.getElementById("userInput").value;
        if (searchVal.length === 0) {
            getContElement().innerHTML = searchContext;
        } else {
            getContElement().innerHTML = searchContext;
            highLightWords(searchVal);
        }
    }
}
