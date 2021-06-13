import { natureQuestions, finalCard } from "../data/nature-data.js";

const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
var close = document.querySelector(".close");
const flexWrapper = document.querySelector(".flex-wrapper");

let nature = natureQuestions.map(
  ({
    id,
    heading,
    question,
    correct_answer,
    incorrect_answer,
    correct_prompt,
    incorrect_prompt,
  }) => {
    const cardWrapper = document.createElement("div");
    const cardTitle = document.createElement("h1");
    const questionParagraph = document.createElement("p");
    const correctAnswer = document.createElement("button");
    const incorrectAnswer1 = document.createElement("button");
    const incorrectAnswer2 = document.createElement("button");

    const correctPromtDiv = document.createElement("div");
    const incorrectPromtDiv = document.createElement("div");

    cardWrapper.className = "card-wrapper";
    cardWrapper.id = id;

    correctPromtDiv.innerHTML = correct_prompt;
    correctPromtDiv.className = "correct-promt-div";

    incorrectPromtDiv.innerHTML = incorrect_prompt;
    incorrectPromtDiv.className = "incorrect-promt-div";

    cardTitle.innerHTML = heading;
    cardWrapper.appendChild(cardTitle);

    questionParagraph.innerHTML = question;
    cardWrapper.appendChild(questionParagraph);

    correctAnswer.innerHTML = correct_answer;
    cardWrapper.appendChild(correctAnswer);

    incorrectAnswer1.innerHTML = incorrect_answer[0];
    cardWrapper.appendChild(incorrectAnswer1);

    incorrectAnswer2.innerHTML = incorrect_answer[1];
    cardWrapper.appendChild(incorrectAnswer2);

    const displayNextQuestion = () => {
      console.log("display next question is done");
      if (id < nature.length) {
        flexWrapper.innerHTML = "";
        flexWrapper.appendChild(nature[id++]);
      } else {
        flexWrapper.innerHTML = "";
        flexWrapper.appendChild(finalCardModal[0]);
      }
    };

    const correctAnswerPrompt = () => {
      console.log("check answer is done");
      flexWrapper.innerHTML = "";
      flexWrapper.appendChild(correctPromtDiv);
      const nextQuestionButton = document.createElement("button");
      nextQuestionButton.innerText = "Take the next step";
      correctPromtDiv.appendChild(nextQuestionButton);
      nextQuestionButton.addEventListener("click", displayNextQuestion);
    };

    const incorrectAnswerPrompt = () => {
      console.log("check answer is done");
      flexWrapper.innerHTML = "";
      flexWrapper.appendChild(incorrectPromtDiv);
      const nextQuestionButton = document.createElement("button");
      nextQuestionButton.innerText = "Take the next step";
      incorrectPromtDiv.appendChild(nextQuestionButton);
      nextQuestionButton.addEventListener("click", displayNextQuestion);
    };

    correctAnswer.addEventListener("click", correctAnswerPrompt);
    incorrectAnswer1.addEventListener("click", incorrectAnswerPrompt);
    incorrectAnswer2.addEventListener("click", incorrectAnswerPrompt);

    return cardWrapper;
  }
);

let finalCardModal = finalCard.map(({ title, paragraph, link }) => {
  const finalWrapper = document.createElement("div");
  const finalTitle = document.createElement("h1");
  const finalParagraph = document.createElement("p");
  const linkButton = document.createElement("button");
  const linkIndex = document.createElement("a");

  finalWrapper.className = "final-wrapper";

  finalTitle.innerText = title;
  finalWrapper.appendChild(finalTitle);

  finalParagraph.innerText = paragraph;
  finalWrapper.appendChild(finalParagraph);

  linkIndex.href = "../index.html#quiz-options";
  linkIndex.appendChild(linkButton);
  linkButton.innerText = link;
  finalWrapper.appendChild(linkIndex);

  return finalWrapper;
});

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
