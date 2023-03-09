const chatClick = document.querySelector(".chat-widget");
console.log(chatClick);

chatClick.addEventListener("click", (e) => {
  e.preventDefault();
  chatClick.classList.add("chat-widget_active");
});

const guest = document.getElementById("chat-widget__input");
console.log(guest);
const bot = document.getElementById("chat-widget__messages");
console.log(bot);

guest.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    bot.innerHTML += `<div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">${guest.value}</div>
</div>`;
    guest.value = "";
    arrABV(arr);

    bot.innerHTML += `
  <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">
    ${arrABV(arr)}
    </div>
  </div>`;
  }
  console.log(event.key);
});

const arr = [
  "привет",
  "как дела?",
  "какая погода?",
  "который сейчас час?",
  "всем привет я ChatGPT",
];
function arrABV(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  let rValue = arr[rand];
  return rValue;
}

let time = new Date().toLocaleTimeString().slice(0, -3);
console.log(Date());