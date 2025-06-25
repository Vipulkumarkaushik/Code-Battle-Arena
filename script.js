
const startBtn = document.getElementById("startBtn");
const timerEl = document.getElementById("timer");
const questionBox = document.getElementById("questionBox");
const scoreAEl = document.getElementById("scoreA");
const scoreBEl = document.getElementById("scoreB");

const questions = [
  "Implement Merge Sort",
  "Find the Longest Palindromic Substring",
  "Detect cycle in a Directed Graph",
  "Implement LRU Cache",
  "Find kth largest element using Heap",
  "Reverse a Linked List",
  "Detect and remove loop in Linked List"
];

let scoreA = 0, scoreB = 0;
let timer;
let timeLeft = 300;

function startBattle() {
  if (timer) clearInterval(timer);
  timeLeft = 300;
  updateTimer();
  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft % 30 === 0) showRandomQuestion();
    if (timeLeft % 60 === 0) simulateScore();
    if (timeLeft <= 0) {
      clearInterval(timer);
      questionBox.innerText = "Battle Over!";
    }
  }, 1000);
}

function updateTimer() {
  const min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const sec = (timeLeft % 60).toString().padStart(2, '0');
  timerEl.innerText = `${min}:${sec}`;
}

function showRandomQuestion() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  questionBox.innerText = q;
}

function simulateScore() {
  scoreA += Math.floor(Math.random() * 10);
  scoreB += Math.floor(Math.random() * 10);
  scoreAEl.innerText = scoreA;
  scoreBEl.innerText = scoreB;
}

startBtn.addEventListener("click", startBattle);
