const strikeTextButton = document.querySelector("button");
const strikeTextInput = document.querySelector("#strike-text");
const strikeTextContainer = document.querySelector("#strike-text-container");
const copyMessageElement = document.querySelector("#copy-message");

strikeTextButton.addEventListener("click", strikeText);
strikeTextContainer.addEventListener("click", copyText);

function strikeText(event) {
    const text = strikeTextInput.value;
    let newText = "";
    let strikeChar = "\u{0336}";
    for (const letter of text) {
        newText += strikeChar + letter;
    }
    strikeTextContainer.textContent = newText;
    strikeTextContainer.style.visibility = "visible";
}

function copyText(event) {
    navigator.clipboard.writeText(strikeTextContainer.textContent).then(
        () => {
            copyMessageElement.style.visibility = "visible";
            copyMessageElement.classList.add("fade-out");
            copyMessageElement.addEventListener("animationend", (event) => {
                copyMessageElement.style.visibility = "hidden";
                copyMessageElement.classList.remove("fade-out");
            });
        },
        () => {
            /* clipboard write failed */
        }
    );
}
