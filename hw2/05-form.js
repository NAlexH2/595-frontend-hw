// Add your code here

document.getElementById("dataForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const registrationStatus =
        document.getElementById("registrationStatus").value;
    const progLangs = document.getElementById("progLangs").value;
    const opSys = document.getElementById("opSys").value;
    const fullStack = document.getElementById("fullStack").value;
    const anyElse = document.getElementById("anyElse").value;
    return;
}
