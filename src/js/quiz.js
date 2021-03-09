import { natureQuestions } from "../data/nature-data.js";

const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");
var close = document.querySelector(".close");
const flexWrapper = document.querySelector(".flex-wrapper");

let nature = natureQuestions.map(
  ({ id, heading, question, correct_answer, incorrect_answer, correct_prompt, incorrect_prompt }) => {
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


    const correctAnswerPrompt = () => {
      flexWrapper.innerHTML = "";
      flexWrapper.innerHTML = correct_prompt;
      const nextQuestionButton = document.createElement("button");
      nextQuestionButton.innerText = "Take the next step";
      flexWrapper.appendChild(nextQuestionButton);
      nextQuestionButton.addEventListener('click', displayNextQuestion);
    };

    const incorrectAnswerPrompt = () => {
      flexWrapper.innerHTML = "";
      flexWrapper.innerHTML = incorrect_prompt;
      const nextQuestionButton = document.createElement("button");
      nextQuestionButton.innerText = "Take the next step";
      flexWrapper.appendChild(nextQuestionButton);
      nextQuestionButton.addEventListener('click', displayNextQuestion);
    };

    const displayNextQuestion = () => {
        flexWrapper.innerHTML = "";
        flexWrapper.appendChild(nature[id++]);
        console.log(id);

      /*
        if(this.id === id.length -1) {
          correctAnswer.display = "none";
          incorrectAnswer1.display = "none";
          incorrectAnswer2.display = "none";
        }
      */
    }

    correctAnswer.addEventListener('click', correctAnswerPrompt);
    incorrectAnswer1.addEventListener('click', incorrectAnswerPrompt);
    incorrectAnswer2.addEventListener('click', incorrectAnswerPrompt);

    

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


