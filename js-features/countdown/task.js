"use strict"
const addTimer = () => {
    const timer = document.getElementById("timer");
    timer.textContent -= 1; {
        if (timer.textContent === "0") {
            alert("Вы победили в конкурсе!");
            clearInterval(addTimer);
        }
    }   
}

setInterval(addTimer, 1000);



