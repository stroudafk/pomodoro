
let intervalID;
var timeDisplayed = document.getElementById("time");
var timerBtnValue = document.getElementById("toggleTimerBtnVal");
var timerButton = document.getElementById("toggleTimerBtn");
var timerState = false;
var sessionStart;
var sessionLength = 1200; // 20 minutes in seconds
var timeElapsed = 0;

function updateTime() {
  timeElapsed += 1; // 1 = 0.1 seconds
  let timeDifference = (sessionLength * 10) - timeElapsed;
  let minutes = Math.floor((timeDifference / 10) / 60);
  let seconds = Math.round((timeDifference / 10) % 60);
  
  if(timeElapsed >= 1 && timeElapsed <= 9){
    timeDisplayed.innerHTML = sessionLength/60 + ":00";
  }
  else if(timeDifference === 0){
    timeDisplayed.innerHTML = "0:00";
  }
  else if(seconds === 60){

    timeDisplayed.innerHTML = (minutes) + ":59";
  }
  else if(seconds < 10){
    timeDisplayed.innerHTML = minutes + ":0" + seconds;
  }
  else{
    timeDisplayed.innerHTML = minutes + ":" + seconds;
  }
  

}

function startTimer(){
  if(!intervalID){
    intervalID = setInterval(updateTime, 100);
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


