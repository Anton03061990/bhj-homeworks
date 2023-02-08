const cookie = document.getElementById("cookie");

let clicker__counter = document.getElementById("clicker__counter");
let count = 0;

cookie.onclick = function () {
  if (count % 2 === 0) {
    cookie.width = 100;
  } else {
    cookie.width = 300;
  }
  
  count++;
  clicker__counter.textContent = count;
};
