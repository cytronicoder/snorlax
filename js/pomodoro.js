let pomodoroTime = 25 * 60;
let pomodoroInterval;
const timerDisplay = document.getElementById('timerDisplay');
function updateTimerDisplay() {
    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;
    timerDisplay.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
document.getElementById('startTimer').addEventListener('click', () => {
    if (!pomodoroInterval) {
        pomodoroInterval = setInterval(() => {
            if (pomodoroTime > 0) {
                pomodoroTime--;
                updateTimerDisplay();
            } else {
                clearInterval(pomodoroInterval);
                pomodoroInterval = null;
                alert("Time's up!");
            }
        }, 1000);
    }
});
document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
});
document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
    pomodoroTime = 25 * 60;
    updateTimerDisplay();
});
updateTimerDisplay();
