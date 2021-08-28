const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const hours = new Date();

console.log(hours.getHours() % 12);
console.log(scale(hours.getHours() % 12, 0, 11, 0, 360));
