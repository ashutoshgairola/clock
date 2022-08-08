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

// clock

const deg = 6;
var i = 0;
const hr = document.getElementById("hr");
const mn = document.getElementById("min");

const sc = document.getElementById("sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.classList.add(`rotate-[${hh + mm / 12}deg]`);
  mn.classList.add(`rotate-[${mm}deg]`);
  sc.classList.add(`rotate-[${ss}deg]`);
  console.log(`${i++} and ${ss} and ${ss - 6}`);
  if (ss - 6 > 0) sc.classList.remove(`rotate-[${ss - 6}deg]`);
  if (ss == 6) {
    sc.classList.remove(`rotate-[0deg]`);
    sc.classList.remove(`rotate-[354deg]`);
  }
}, 1000);
