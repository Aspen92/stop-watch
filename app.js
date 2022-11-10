var seconds = 00;
var tens = 00;

var outPutSeconds = document.getElementById("seconds");
var outPutTens = document.getElementById("tens");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var Interval;

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener("click", () => {
  clearInterval(Interval);
});

buttonReset.addEventListener("click", () => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  outPutSeconds.innerHTML = seconds;
  outPutTens.innerHTML = tens;
});

function startTime() {
  tens++;
  if (tens <= 9) {
    outPutTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    outPutTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    outPutSeconds.innerHTML = "0" + seconds;
    tens = 0;
    outPutTens.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    outPutSeconds.innerHTML = seconds;
  }
}
