import { natureQuestions } from "./data/nature-data.js";

natureQuestions.forEach((e) => {
  const { id, question, correct_answer, incorrect_answer } = e;

  console.log(id, question, correct_answer, incorrect_answer);
});

const startButton = document.querySelector('.start-button');
const introPage = document.querySelector('.intro-page');
const categoryIntro = document.querySelector('.category-intro');
const quizIntro = document.querySelector('.quiz-intro');

const toggle = () => {
  introPage.classList.add('fadeOut');
  categoryIntro.classList.add('fadeIn');
  quizIntro.classList.add('fadeIn');
}

startButton.addEventListener('click', toggle);


