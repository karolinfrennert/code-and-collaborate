import { natureQuestions } from "./data/nature-data.js";

natureQuestions.forEach((e) => {
  const { id, question, correct_answer, incorrect_answer } = e;

  console.log(id, question, correct_answer, incorrect_answer);
});
