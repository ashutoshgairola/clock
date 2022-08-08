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

// timer
var min = 0;
var sec = 0;
var interval;
var myInterval;
var audio = new Audio("sound/alarm.wav");
var a = 0;

const resetTimer = document.getElementById("resetTimer");
const startTimer = document.getElementById("startTimer");
const min25 = document.getElementById("min25");
const min15 = document.getElementById("min15");
const min5 = document.getElementById("min5");
const min1 = document.getElementById("min1");

const secDiv = document.getElementById("sec");
const minDiv = document.getElementById("min");
const imgDiv = document.getElementById("imgDiv");

startTimer.onclick = () => {
  clearInterval(interval);
  interval = setInterval(timer, 1000);
};
min25.onclick = () => {
  min = min + 25;
  if (min < 10) {
    minDiv.innerText = `0${min}`;
  }
  if (min >= 10) {
    minDiv.innerText = min;
  }
};
min15.onclick = () => {
  min = min + 15;
  if (min < 10) {
    minDiv.innerText = `0${min}`;
  }
  if (min >= 10) {
    minDiv.innerText = min;
  }
};
min5.onclick = () => {
  min = min + 5;
  if (min < 10) {
    minDiv.innerText = `0${min}`;
  }
  if (min >= 10) {
    minDiv.innerText = min;
  }
};
min1.onclick = () => {
  min = min + 1;
  if (min < 10) {
    minDiv.innerText = `0${min}`;
  }
  if (min >= 10) {
    minDiv.innerText = min;
  }
};
resetTimer.onclick = () => {
  clearInterval(interval);
  clearInterval(myInterval);
  imgDiv.innerHTML = `<img
            class="w-full"
            src="https://media.giphy.com/media/tmcChGcHQUhsDXI3Jx/giphy.gif"
            alt=""
          />`;
  secDiv.innerText = "00";
  minDiv.innerText = "00";
  min = 0;
  sec = 0;
};

function timer() {
  if (sec > 0) sec--;

  if (sec < 10) {
    secDiv.innerText = `0${sec}`;
  }
  if (sec >= 10) {
    secDiv.innerText = sec;
  }
  if (sec < 2 && min > 0) {
    sec = 60;
    min--;
  }
  if (min < 10) {
    minDiv.innerText = `0${min}`;
  }
  if (min >= 10) {
    minDiv.innerText = min;
  }
  if (sec == 0 && min == 0) {
    clearInterval(interval);
    secDiv.innerText = "00";
    minDiv.innerText = "00";
    imgDiv.innerHTML = `<img
            class="w-full"
            src="https://media.giphy.com/media/e5Sw7kqXOqGkQgOvc3/giphy.gif"
            alt=""
          />`;
    myInterval = setInterval(() => {
      audio.play();
      a++;
      if (a == 7) clearInterval(myInterval);
    }, 1000);
  }
}
