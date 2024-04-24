// Using Bootstrap 5.0 Modals (way easier than trying to make your own!)
// I add an event listener to the submit button by just... listening, for submit
// to take place.
document.getElementById("dataForm").addEventListener("submit", handleSubmit);

// I get the modalButtonClose element, and use this to trigger closing the modal
// when it's open.
document
    .getElementById("modalButtonClose")
    .addEventListener("click", hideModal);

// Easier to just keep track of this as a global const since it is updated in
// Multiple places.
const myModal = new bootstrap.Modal(document.getElementById("myModal"));

const nameToModal = function fullNameToTheModal(fullName) {
    const modalBody = document.getElementById("modalBody");
    const fullNamePara = document.createElement("p");
    fullNamePara.innerText = `Full name: ${fullName}`;
    modalBody.appendChild(fullNamePara);
    return;
};

const emailToModal = function emailToTheModal(email) {
    const modalBody = document.getElementById("modalBody");
    const emailPara = document.createElement("p");
    emailPara.innerText = `Email: ${email}`;
    modalBody.appendChild(emailPara);
    return;
};

const regStatToModal = function registeredStatusToModal(regStatus) {
    const regStatusPara = document.createElement("p");
    regStatusPara.innerText = `Registration Status: ${regStatus}`;
    modalBody.appendChild(regStatusPara);
    return;
};

const classToModal = function classTakenToModal(className) {
    if (className.length > 0) {
        const courseTakenPara = document.createElement("p");
        courseTakenPara.innerText = `Course completed - ${className}`;
        modalBody.appendChild(courseTakenPara);
    }
};

const moreToModal = function additionalToModal(addtionals) {
    const additionalCommentsPara = document.createElement("p");
    additionalCommentsPara.innerText = `Additional Comments: ${addtionals}`;
    modalBody.appendChild(additionalCommentsPara);
    return;
};

function displayModal(allData) {
    // Get the main body of the modal really quick.
    const modalBody = document.getElementById("modalBody");

    // Reset modalBody in the event it still has data
    modalBody.innerHTML = "";

    // Call a bunch of functions to do our work to add to the modal.
    // I'm doing this a bunch of times because there's additional text I'd like
    // to dd
    nameToModal(allData[0]);
    emailToModal(allData[1]);
    regStatToModal(allData[2]);
    classToModal(allData[3]);
    classToModal(allData[4]);
    classToModal(allData[5]);
    moreToModal(allData[6]);

    // Okay, we've built it with all the content, lets show it off!
    myModal.show();
}

// Way easier to hide it than showing it...
function hideModal() {
    document.getElementById("modalBody").innerHTML = "";
    myModal.hide();
}

// Write a few ternaries so they are easier to read on their own.
// Each either returns the value in the input (the class name) or it returns
// an empty string. We check/use this later when building the modal.
const getPL = function getProgramingLanguage() {
    return document.getElementById("progLangs").checked
        ? document.getElementById("progLangs").value
        : "";
};

const getOpSys = function getOperatingSystems() {
    return document.getElementById("opSys").checked // If true
        ? document.getElementById("opSys").value // Return/use this
        : ""; // Otherwise, return/use this
};

// Ternaries do not have to be used exclusively in returns like this.
// It's just convenient. You can also nest these in one another, but don't.
// ABNBSG even says don't nest, but it says keep them to single lines. Can't
// really do that here.
const getFS = function getFullStack() {
    return document.getElementById("fullStack").checked
        ? document.getElementById("fullStack").value
        : "";
};

function handleSubmit(event) {
    event.preventDefault();
    const allData = [];
    // package it up in a known order so it's easier to manage.
    allData.push(document.getElementById("fullName").value);
    allData.push(document.getElementById("email").value);
    allData.push(document.getElementById("registrationStatus").value);
    allData.push(getPL());
    allData.push(getOpSys());
    allData.push(getFS());
    allData.push(document.getElementById("anyElse").value);

    // pass it off to displayModal to be processed!
    displayModal(allData);

    return;
}
