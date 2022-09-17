const start = document.querySelector(".start");
const question = document.querySelector(".question");
const check = document.querySelector(".check");

const body = document.querySelector("body");
const again = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoree = 20;
let highscoree = 0;
check.addEventListener("click", function () {
  const textarea = Number(document.querySelector(".textarea").value);
  console.log(textarea, typeof textarea);
  if (!textarea) {
    //no number
    start.textContent = "❌no number";
  } else if (textarea === secretNumber) {
    //When guess is correct
    start.textContent = "🎉Correct Number";

    body.style.backgroundColor = "#60b347";
    question.style.width = "140px";

    question.textContent = secretNumber;
    if (scoree > highscoree) {
      highscoree = scoree;
      document.querySelector(".highscoree").textContent = highscoree;
    }
    //when guess is different from secret number
  } else if (textarea !== secretNumber) {
    if (scoree > 0) scoree--;
    start.textContent = textarea > secretNumber ? "⬆ Too high" : "⬇ Too Low";
    document.querySelector(".scoree").textContent = scoree;
    if (scoree === 0) start.textContent = "You Lost the game";
  }
});
again.addEventListener("click", function () {
  scoree = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  start.textContent = "Start guessing...";

  body.style.backgroundColor = "#000";
  question.style.width = "100px";

  question.textContent = "?";
  document.querySelector(".textarea").value = "";
});
