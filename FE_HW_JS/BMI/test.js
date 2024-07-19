const props = {
  growth: 184,
  weigh: 75,
};

const res = (props.weigh / (props.growth / 100) ** 2).toFixed(2);

console.log(res);
