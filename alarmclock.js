function setAlarm() {
  let alarmCounter = document.querySelector("#timeRemaining");
  let bodyClass = document.querySelector(".centre");
  setAlarmTime = document.querySelector("#alarmSet");
  let inputValue = setAlarmTime.value;

  let minutes = Math.floor(inputValue / 60);
  let seconds = inputValue % 60;

  let interval = setInterval(() => {
    if (minutes > 0 && seconds === 0) {
      minutes--;
      seconds = 59;
    }

    if (seconds === 0) {
      clearInterval(interval);
      // audio.play();
      playAlarm();
      bodyClass.style.backgroundColor = "#B5AEA8";
    }

    alarmCounter.textContent = `Time Remaining: ${zeroPadded(minutes)} : ${zeroPadded(seconds)}`;
    seconds--;
  }, 1000);

  pauseAlarm();

  // function adds "0" to the time units to give it a double digit //
  function zeroPadded(time) {
    return time.toString().padStart(2, 0);
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
