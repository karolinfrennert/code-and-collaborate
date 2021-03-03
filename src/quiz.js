import { natureQuestions } from "./data/nature-data.js";

const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const button4 = document.querySelector(".button-4");
const button5 = document.querySelector(".button-5");
const button6 = document.querySelector(".button-6");
const button7 = document.querySelector(".button-7");

console.log(button1);

const alert = () => {
  console.log("hey hey hey");
};

button1.addEventListener("click", alert);

natureQuestions.forEach((e) => {
  const { id, question, correct_answer, incorrect_answer } = e;
});
