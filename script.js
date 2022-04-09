const homePlusBtn = document.querySelector(".homePlusBtn");
const homeMinusBtn = document.querySelector(".homeMinusBtn");
const awayPlusBtn = document.querySelector(".awayPlusBtn");
const awayMinusBtn = document.querySelector(".awayMinusBtn");
const homeScore = document.querySelector(".home-score");
const awayScore = document.querySelector(".away-score");
const quarter = document.querySelector(".quarter");
const mainClock = document.querySelector(".main-clock");
const shotClock = document.querySelector(".shotclock");
const startBtn = document.querySelector(".start-button");
const pauseBtn = document.querySelector(".pause-button");

let homeScoreNumber = 0;
let awayScoreNumber = 0;

let quarterNumber;
let quarterMinutes;
let quarterSeconds;
let quarterCounter;

let shotClockNumber;
let shotClockCounter;

const addHomeGoal = () => {
  homeScoreNumber++;
  homeScore.textContent = `${homeScoreNumber}`;
};

const substractHomeGoal = () => {
  homeScoreNumber--;
  homeScore.textContent = `${homeScoreNumber}`;
};

const addAwayGoal = () => {
  awayScoreNumber++;
  awayScore.textContent = `${awayScoreNumber}`;
};

const substractAwayGoal = () => {
  awayScoreNumber--;
  awayScore.textContent = `${awayScoreNumber}`;
};

const handleStart = () => {
  clearInterval(quarterCounter);
  let quarterMinutes = 7;
  let quarterSeconds = 60;
  quarterCounter = setInterval(() => {
    if (quarterSeconds > 0) {
      quarterSeconds--;
      mainClock.textContent = `${quarterMinutes}:${quarterSeconds}`;
    } else if (quarterSeconds == 0) {
      quarterMinutes--;
      quarterSeconds = 59;
      mainClock.textContent = `${quarterMinutes}:${quarterSeconds}`;
    }
  }, 500);
};

const handleShotClock = () => {
  clearInterval(shotClockCounter);
  let shotClockNumber = 30;
  shotClock.textContent = 30;
  shotClockCounter = setInterval(() => {
    if (shotClockNumber > 0 && shotClockNumber <= 30) {
      shotClockNumber--;
      shotClock.textContent = shotClockNumber;
    } else if (shotClockNumber == 0) {
      shotClock.textContent = "!!!0!!!";
    } else {
      console.log("błąd shotclocka");
    }
  }, 1000);
  return;
};

const resetShotClock = () => {
  let shotClockNumber = 30;
  shotClock.textContent = 30;
  handleShotClock();
};

const handlePause = () => {
  let pauseActive = true;
  clearInterval(shotClockCounter);
  clearInterval(quarterCounter);
};

//dodać zabezpiecznie przed przypadkowym zamknięciem.

homePlusBtn.addEventListener("click", addHomeGoal);
homeMinusBtn.addEventListener("click", substractHomeGoal);
awayPlusBtn.addEventListener("click", addAwayGoal);
awayMinusBtn.addEventListener("click", substractAwayGoal);
shotClock.addEventListener("click", resetShotClock);
startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
