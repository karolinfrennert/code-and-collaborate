import { natureQuestions } from "../data/nature-data.js";

const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
var close = document.querySelector(".close");
const flexWrapper = document.querySelector(".flex-wrapper");

let nature = natureQuestions.map(
  ({ id, heading, question, correct_answer, incorrect_answer }) => {
    const cardWrapper = document.createElement("div");
    const cardTitle = document.createElement("h1");
    const questionParagraph = document.createElement("p");
    const correctAnswer = document.createElement("button");
    const incorrectAnswer1 = document.createElement("button");
    const incorrectAnswer2 = document.createElement("button");

    cardWrapper.className = "card-wrapper";
    cardWrapper.id = id;

    cardTitle.innerText = heading;
    cardWrapper.appendChild(cardTitle);

    questionParagraph.innerText = question;
    cardWrapper.appendChild(questionParagraph);

    correctAnswer.innerText = correct_answer;
    cardWrapper.appendChild(correctAnswer);

    incorrectAnswer1.innerText = incorrect_answer[0];
    cardWrapper.appendChild(incorrectAnswer1);

    incorrectAnswer2.innerText = incorrect_answer[1];
    cardWrapper.appendChild(incorrectAnswer2);

    return cardWrapper;
  }
);

const openModal = () => {
  flexWrapper.innerHTML = "";
  modal.style.display = "block";
};

function loopButton() {
  const id = this.id;
  flexWrapper.appendChild(nature[id - 1]);
}

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", openModal);
  button.addEventListener("click", loopButton);
});
