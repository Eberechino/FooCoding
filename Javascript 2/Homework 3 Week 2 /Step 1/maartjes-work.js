"use strict";

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180,
  },
  {
    name: "Some web development",
    duration: 120,
  },
  {
    name: "Fix homework for class10",
    duration: 20,
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 1.0,
  },
  {
    name: "Some more web development",
    duration: 180,
  },
  {
    name: "Staring out the window",
    duration: 10,
  },
  {
    name: "Talk to a lot of people",
    duration: 1.0,
  },
  {
    name: "Look at application assignments new students",
    duration: 40,
  },
];

const maartjesTasks = monday
  .concat(tuesday)
  .map((x) => x.duration / 60)
  .filter((x) => x >= 2);
const maartjesHourlyRate = 20;

let computeEarnings =
  maartjesTasks.reduce((previous, current) => previous + current, 0) *
  maartjesHourlyRate;

const para = document.createElement("p");
para.textContent = `Maartje has earned €${computeEarnings.toFixed(2)}`;
document.body.appendChild(para);

//Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
