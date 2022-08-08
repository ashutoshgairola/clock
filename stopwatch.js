// navbar
var menu = document.querySelector("#menu");
var closeIcon = document.querySelector("#close");
var burger = document.querySelector("#burger");

burger.addEventListener("click", function () {
  menu.classList.remove("hidden");

  burger.classList.add("hidden");
});

closeIcon.addEventListener("click", function () {
  menu.classList.add("hidden");

  burger.classList.remove("hidden");
});

// stopWatch

var ms = 0;
var sec = 0;
var min = 0;
var interval;

const startWatch = document.getElementById("startWatch");
const stopWatch = document.getElementById("stopWatch");
const resetWatch = document.getElementById("resetWatch");

const msDiv = document.getElementById("ms");
const secDiv = document.getElementById("sec");
const minDiv = document.getElementById("min");

startWatch.onclick = () => {
  clearInterval(interval);
  interval = setInterval(timer, 10);
};

stopWatch.onclick = () => {
  clearInterval(interval);
};

resetWatch.onclick = () => {
  clearInterval(interval);
  msDiv.innerText = "00";
  secDiv.innerText = "00";
  minDiv.innerText = "00";
  ms = 0;
  sec = 0;
};

function timer() {
  ms++;
  console.log(ms);
  if (ms < 10) {
    msDiv.innerText = `0${ms}`;
  }
  if (ms >= 10) {
    msDiv.innerText = ms;
  }
  if (ms > 99) {
    ms = 0;
    sec++;
  }
  if (sec < 10) {
    secDiv.innerText = `0${sec}`;
  }
  if (sec >= 10) {
    secDiv.innerText = sec;
  }
  if (sec > 59) {
    sec = 0;
    min++;
  }
  if (min < 10) {
    minDiv.innerText = `0${min}`;
  }
  if (min >= 10) {
    minDiv.innerText = min;
  }
}
