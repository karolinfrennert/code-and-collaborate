const startButton = document.querySelector(".start-button");
const introPage = document.querySelector(".intro-page");
const categoryIntro = document.querySelector(".category-intro");
const quizIntro = document.querySelector(".quiz-intro");

const toggle = () => {
  introPage.classList.add("fadeOut");
  categoryIntro.classList.add("fadeIn");
  quizIntro.classList.add("fadeIn");
};

startButton.addEventListener("click", toggle);
