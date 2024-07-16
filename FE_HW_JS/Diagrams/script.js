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
const totalRisk = eval(valueData.join("+"));

function calcRisk(local) {
  return ((local / totalRisk) * 100).toFixed(2);
}

const myChart = new Chart(area, {
  type: "doughnut",
  data: {
    labels: Object.entries(data).map((item) => {
      const percent = calcRisk(item[1]);
      item[0] + percent;
      return `${item[0]} ${percent}% (${item[1]} рисков/признаков)`;
    }),
    datasets: [
      {
        backgroundColor: colors,
        data: Object.values(data),
        cutout: 80,
      },
    ],
  },
  options: {
    rotation: 180,
    layout: {
      padding: {
        left: 0,
        top: 0,
      },
    },
    plugins: {
      title: {
        display: false,
        text: "Круговая диаграмма",
      },
      legend: {
        position: "left",
        align: "center",
        labels: {
          boxWidth: 15,
          padding: 30,
          color: "#0F8AD7",
          font: {
            size: 16,
          },
        },
      },
    },
  },
});

/*----------------------------------------------------*/

const area2 = document.querySelector("#myChart2");
const data2 = {
  "Устранены заказчиком": 89600000,
  "Применены меры реагирования": 75780000,
  "В работе": 70600000,
  "Оставлены без внимания заказчиком": 45340000,
  "Не подтверждены контролером": 21800000,
};

const myChart2 = new Chart(area2, {
  type: "bar",
  data: {
    labels: Object.keys(data2),
    datasets: [
      {
        backgroundColor: "#0F8AD7",
        data: Object.values(data2),
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  },
});
