const ul = document.getElementById("items");
const questions = [];
const scoreText = document.getElementById("score");
let score = 0;

async function getItems() {
  const url = new URL(
    `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean`
  );
  const response = await fetch(url);

  if (response.status === 200) {
    questions.splice(0, questions.length);
    score = 0;
    scoreText.innerText = score;
    const data = await response.json();
    for (const question of data.results) {
      questions.push(
        new Question(
          question.question,
          ["True", "False"],
          question.correct_answer
        )
      );
    }
    showQuestions();
  }
}

function showQuestions() {
  for (const question of questions) {
    const card = document.createElement("li");
    const cardHeader = document.createElement("h3");
    const cardBody = document.createElement("p");
    const cardFooter = document.createElement("div");
    const trueChoice = document.createElement("button");
    const falseChoice = document.createElement("button");

    card.classList.add("card");
    cardHeader.classList.add("card-header");
    cardBody.classList.add("card-body");
    cardFooter.classList.add("card-footer");
    trueChoice.classList.add("btn");
    trueChoice.classList.add("btn-primary");
    falseChoice.classList.add("btn");
    falseChoice.classList.add("btn-primary");

    cardHeader.innerText = `${questions.indexOf(question) + 1}`;
    cardBody.innerText = question.statement;

    trueChoice.textContent = "True";
    falseChoice.textContent = "False";

    trueChoice.onclick = () => {
      if (question.correctAnswer === "True") {
        cardBody.style.backgroundColor = "green";
        score++;
        scoreText.innerText = score;
      } else {
        cardBody.style.backgroundColor = "red";
      }
      trueChoice.disabled = true;
      falseChoice.disabled = true;
    };

    falseChoice.onclick = () => {
      if (question.correctAnswer === "False") {
        cardBody.style.backgroundColor = "green";
        score++;
        scoreText.innerText = score;
      } else {
        cardBody.style.backgroundColor = "red";
      }
      trueChoice.disabled = true;
      falseChoice.disabled = true;
    };

    cardFooter.appendChild(trueChoice);
    cardFooter.appendChild(falseChoice);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    ul.appendChild(card);
  }
}

class Question {
  constructor(statement, answers, correctAnswer) {
    this.statement = statement;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
