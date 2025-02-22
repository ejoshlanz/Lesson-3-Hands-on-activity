function changeText() {
    let text = prompt("Enter the text you want to display: ");
    if (text === null) {
        return;
    } else if (text.trim() === "") {
        alert("Text field cannot be empty.");
        return;
    }
    document.getElementById("message").innerText = text;
}
