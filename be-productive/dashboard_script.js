// Timer logic
let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-timer");
const pauseBtn = document.getElementById("pause-timer");
const resetBtn = document.getElementById("reset-timer");

function updateTimerDisplay() {
  let mins = Math.floor(timeLeft / 60);
  let secs = timeLeft % 60;
  timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert("Time's up! 🎉 Take a short break.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateTimerDisplay();
  isRunning = false;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// To-do list logic
const addBtn = document.getElementById("add-todo");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task === "") return;
  const li = document.createElement("li");
  li.innerHTML = `${task} <span>✖</span>`;
  li.querySelector("span").addEventListener("click", () => li.remove());
  todoList.appendChild(li);
  todoInput.value = "";
});

// Scroll animation for cards
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  alert("Logged out successfully!");
  window.location.href = "index.html"; // back to landing page
});

updateTimerDisplay();


