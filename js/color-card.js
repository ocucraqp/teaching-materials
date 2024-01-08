function createButtons() {
  const buttonsContainer = document.getElementById("buttons");
  buttonsContainer.innerHTML = ""; // コンテナをクリア
  const count = document.getElementById("buttonCount").value;

  let buttonRow = document.createElement("div");
  buttonRow.className = "button-row";
  buttonsContainer.appendChild(buttonRow);

  for (let i = 1; i <= count; i++) {
    let button = document.createElement("button");
    button.className = "number-button";
    button.innerHTML = i;
    button.style.backgroundColor = "red";
    button.onclick = function () {
      this.style.backgroundColor =
        this.style.backgroundColor === "red" ? "blue" : "red";
    };
    buttonRow.appendChild(button);

    // 10個ごとに改行
    if (i % 10 === 0) {
      buttonRow = document.createElement("div");
      buttonRow.className = "button-row";
      buttonsContainer.appendChild(buttonRow);
    }
  }
}
