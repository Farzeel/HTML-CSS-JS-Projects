let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const countDownBtn = document.getElementById("startBtn");
const timeInput = document.getElementById("targetTime");

let selectedDate = "";

let timer;

function calculateDiffernce() {
  let currentDate = new Date().getTime();
  let comingDate = new Date(selectedDate).getTime();

  const difference = comingDate - currentDate;

  if (difference <= 0) {
    clearInterval(timer);
    return;
  }
  console.log("hng ");
  let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, 0);
  let hourLeft = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, 0);
  let minuteLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, 0);
  let secondLeft = Math.floor((difference % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, 0);

  days.textContent = daysLeft;
  hours.textContent = hourLeft;
  minutes.textContent = minuteLeft;
  seconds.textContent = secondLeft;
}

function startCountDown() {
  if (!timeInput.value.trim()) return;
  selectedDate = timeInput.value;

  calculateDiffernce();

  timer = setInterval(calculateDiffernce, 1000);

  timeInput.value = "";
}

countDownBtn.addEventListener("click", startCountDown);
