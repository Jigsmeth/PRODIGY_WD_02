let timerInterval;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsList = document.getElementById("laps");

startStopButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopButton.textContent = "Start";
    } else {
        timerInterval = setInterval(updateTime, 1000);
        startStopButton.textContent = "Pause";
    }
    isRunning = !isRunning;
});

resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00";
    startStopButton.textContent = "Start";
    lapsList.innerHTML = "";
});

lapButton.addEventListener("click", () => {
    if (isRunning) {
        const lapTime = document.createElement("li");
        lapTime.textContent = formatTime(elapsedTime);
        lapsList.appendChild(lapTime);
    }
});

function updateTime() {
    elapsedTime += 1;
    display.textContent = formatTime(elapsedTime);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
    return unit < 10 ? "0" + unit : unit;
}
