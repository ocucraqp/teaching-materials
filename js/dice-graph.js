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

  const ctx = document.getElementById("barChart").getContext("2d");
  const barChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
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
    },
  });

  // ボタンの生成
  const buttonsContainer = document.getElementById("buttons");
  data.labels.forEach((label, index) => {
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";

    let labelSpan = document.createElement("span");
    labelSpan.className = "label";
    labelSpan.textContent = label;

    let plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.onclick = function () {
      updateData(index, 1);
    };

    let minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.style.backgroundColor = "blue";
    minusButton.onclick = function () {
      updateData(index, -1);
    };

    buttonDiv.appendChild(labelSpan);
    buttonDiv.appendChild(plusButton);
    buttonDiv.appendChild(minusButton);
    buttonsContainer.appendChild(buttonDiv);
  });

  // データ更新関数
  function updateData(index, change) {
    data.datasets[0].data[index] += change;
    if (data.datasets[0].data[index] < 0) {
      data.datasets[0].data[index] = 0; // データ値が負の数にならないように制限
    }
    barChart.update();
  }
});
