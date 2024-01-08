document.addEventListener("DOMContentLoaded", function () {
  const data = {
    labels: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "2個のサイコロの合計値の出た回数",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          font: {
            size: 20, // X軸のフォントサイズ
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 20, // X軸のフォントサイズ
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20, // 凡例のフォントサイズ
          },
        },
      },
    },
    animation: {
      duration: 200,
    },
  };
  // グラフ生成
  const ctx = document.getElementById("barChart").getContext("2d");
  const barChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });

  // ボタンの生成
  const buttonsContainer = document.getElementById("buttons");
  data.labels.forEach((label, index) => {
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";

    let labelSpan = document.createElement("span");
    labelSpan.className = "label";
    labelSpan.textContent = label;

    const plusButton = createButton("+", () => updateData(index, 1), "red");
    const minusButton = createButton("-", () => updateData(index, -1), "blue");

    buttonDiv.appendChild(labelSpan);
    buttonDiv.appendChild(plusButton);
    buttonDiv.appendChild(minusButton);
    buttonsContainer.appendChild(buttonDiv);
  });

  function createButton(text, onClick, bgColor = "") {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.backgroundColor = bgColor;
    button.addEventListener("click", onClick);
    return button;
  } 

  // データ更新関数
  function updateData(index, change) {
    const newValue = data.datasets[0].data[index] + change;
    data.datasets[0].data[index] = newValue < 0 ? 0 : newValue;
    barChart.update();
  }
});
