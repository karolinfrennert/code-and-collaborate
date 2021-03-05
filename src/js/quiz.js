import { natureQuestions } from "../data/nature-data.js";

/* const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const button4 = document.querySelector(".button-4");
const button5 = document.querySelector(".button-5");
const button6 = document.querySelector(".button-6");
const button7 = document.querySelector(".button-7"); */
const buttons = document.querySelectorAll(".button")
const modal = document.querySelector(".modal");
var close = document.querySelector(".close");
const flexWrapper = document.querySelector('.flex-wrapper');

const openModal = () => modal.style.display = "block";

buttons.forEach((button) => {
  button.addEventListener('click', openModal);
})

close.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

natureQuestions.forEach((data) => {
  const { id, heading, question, correct_answer, incorrect_answer } = data;
  const cardWrapper = document.createElement('div');
  const cardTitle = document.createElement('h1');
  const questionParagraph = document.createElement('p');
  const correctAnswer = document.createElement('button');
  const incorrectAnswer1 = document.createElement('button');
  const incorrectAnswer2 = document.createElement('button');
  
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

  flexWrapper.appendChild(cardWrapper);

  console.log(cardWrapper);

});

