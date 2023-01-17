
let intervalID;
var timeDisplayed = document.getElementById("time");
var timerBtnValue = document.getElementById("toggleTimerBtnVal");
var timerButton = document.getElementById("toggleTimerBtn");
var timerState = false;
var sessionStart;
var sessionLength = 1200; // 20 minutes in seconds
var timeElapsed = 0;

function updateTime() {
  let timeDifference = (sessionLength) - timeElapsed;
  let minutes = Math.floor(timeDifference / 60);
  let seconds = Math.ceil((timeDifference) % 60);
  
  if(timeDifference === 0){
    timeDisplayed.innerHTML = "0:00";
  }
  else if(seconds === 60){
    timeDisplayed.innerHTML = (minutes) + ":00";
  }
  else if(seconds < 10){
    timeDisplayed.innerHTML = minutes + ":0" + seconds;
  }
  else{
    timeDisplayed.innerHTML = minutes + ":" + seconds;
  }
  timeElapsed += 1; // 1 = 1 second
}

function startTimer(){
  if(!intervalID){
    intervalID = setInterval(updateTime, 1000);
  }
  timerState = true;
  timerBtnValue.innerHTML = "Stop";

}

function stopTimer(){
  clearInterval(intervalID);
  intervalID = null;
  timerState = false;
  timerBtnValue.innerHTML = "Start";
}

function toggleTimer(){
  if(!timerState){
    startTimer();
  }
  else{
    stopTimer();
  }
}

timerButton.addEventListener("click", toggleTimer);


