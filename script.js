const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const milSec = document.getElementById("mil-sec");

let total = 0;
let time = 0;

const formatTime = (startTime) => {
  const hours = Math.floor(startTime / 360000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((startTime % 360000) / 6000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((startTime % 6000) / 100)
    .toString()
    .padStart(2, "0");
  const ms = (startTime % 100).toString().padStart(2, "0");

  return {
    tsagtai: `${hours}:${minutes}:${seconds}`,
    mstei: `.${ms}`,
  };
};

start.addEventListener("click", () => {
  if (time !== 0) return;

  time = setInterval(() => {
    total++;
    timer.textContent = formatTime(total).tsagtai;
    milSec.textContent = formatTime(total).mstei;
  }, 10);
});

stop.addEventListener("click", () => {
  clearInterval(time);
  time = 0;
});

reset.addEventListener("click", () => {
  clearInterval(time);
  time = 0;
  total = 0;
  timer.textContent = "00:00:00";
  milSec.textContent = ".00";
});
