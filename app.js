
let intervalID;
var timeDisplayed = document.getElementById("time");
var timerValue = document.getElementById("toggleTimerBtnVal");
var timerButton = document.getElementById("toggleTimerBtn");
var timerState = false;


function updateTime() {
  timeDisplayed.innerHTML = Date();
}

function startTimer(){
  if(!intervalID){
    intervalID = setInterval(updateTime, 1000);
  }
  timerState = true;
  timerValue.innerHTML = "Stop";
}

function stopTimer(){
  clearInterval(intervalID);
  intervalID = null;
  timerState = false;
  timerValue.innerHTML = "Start";
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


