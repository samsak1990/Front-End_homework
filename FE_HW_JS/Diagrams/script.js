// Circle diagram
// import Chart from "chart.js/auto";

const area = document.querySelector("#myChart");

const colors = ["#FBA896", "#ACDFDC", "#F4CCA4", "#D1A2D4", "#A4C8E1"];
const data = {
  "Устранены заказчиком": 67,
  "Применены меры реагирования": 116,
  "В работе": 52,
  "Оставлены без внимания заказчиком": 18,
  "Не подтверждены контролером": 240,
};

const keyData = Object.keys(data);
const valueData = Object.values(data);

function calcRisk(all, total) {
  return ((all / total) * 100).toFixed(2);
}

const myChart = new Chart(area, {
  type: "doughnut",
  data: {
    labels: Object.keys(data),
    datasets: [
      {
        backgroundColor: colors,
        data: Object.values(data),
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "left",
        align: "center",
        labels: {
          font: {
            size: 20,
          },
        },
      },
    },
  },
});
