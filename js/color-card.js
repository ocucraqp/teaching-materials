function createButton(number) {
  const button = document.createElement("button");
  button.className = "number-button";
  button.textContent = number;
  button.style.backgroundColor = "red";
  button.addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "red" ? "blue" : "red";
  });
  return button;
}

function createButtons() {
  const buttonsContainer = document.getElementById("buttons");
  buttonsContainer.innerHTML = "";
  const count = document.getElementById("buttonCount").value;

  let buttonRow = document.createElement("div");
  buttonRow.className = "button-row";
  buttonsContainer.appendChild(buttonRow);

  for (let i = 1; i <= count; i++) {
    const button = createButton(i);
    buttonRow.appendChild(button);

    if (i % 10 === 0 && i !== count) {
      buttonRow = document.createElement("div");
      buttonRow.className = "button-row";
      buttonsContainer.appendChild(buttonRow);
    }
  }
}