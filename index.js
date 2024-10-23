let awayScoreEl = document.getElementById('away-score')
let homeScoreEl = document.getElementById('home-score')
let timerEl = document.getElementById('game-timer')
let startBtn = document.getElementById('start-timer')

let homeScore = 0
let awayScore = 0

let timer = 600;
let timerInterval;

startBtn.addEventListener('click', start)

function start() {
  if(!timerInterval) {
    timerInterval = setInterval(() => {
      timer--
      let mins = Math.floor(timer/60)
      let secs =timer%60
      timerEl.textContent = `${mins}:${secs<10?'0':''}${secs}`
    }, 1000)
  }
}

let homeAdd1 = document.getElementById('home-add-1')
homeAdd1.addEventListener('click', function() {
  homeScore += 1
  homeScoreEl.textContent = homeScore
})
let homeAdd2 = document.getElementById('home-add-2')
homeAdd2.addEventListener('click', function() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
})
let homeAdd3 = document.getElementById('home-add-3')
homeAdd3.addEventListener('click', function() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
})

let awayAdd1 = document.getElementById('away-add-1')
awayAdd1.addEventListener('click', function() {
  awayScore += 1
  awayScoreEl.textContent = awayScore
})
let awayAdd2 = document.getElementById('away-add-2')
awayAdd2.addEventListener('click', function() {
  awayScore += 2
  awayScoreEl.textContent = awayScore
})
let awayAdd3 = document.getElementById('away-add-3')
awayAdd3.addEventListener('click', function() {
  awayScore += 3
  awayScoreEl.textContent = awayScore
})

let resetHomeBtn = document.getElementById('reset-home')
resetHomeBtn.addEventListener('click', function() {
  homeScore = 0
  homeScoreEl.textContent = homeScore
})
let resetAwayBtn = document.getElementById('reset-away')
resetAwayBtn.addEventListener('click', function() {
  awayScore = 0
  awayScoreEl.textContent = awayScore
})
console.log(awayScore,homeScore, timer, startBtn,homeAdd1,
  homeAdd2, homeAdd3, awayAdd1,awayAdd2,awayAdd3,resetAwayBtn,resetHomeBtn)
