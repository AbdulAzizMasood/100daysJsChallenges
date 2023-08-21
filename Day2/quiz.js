const data = [
  {
    id: 1,
    question: "Which of these fish is actually a Fish?",
    answers: [
      {
        answer: "swordfish",
        isCorrect: true,
      },
      {
        answer: "jellyfish",
        isCorrect: false,
      },
      {
        answer: "starfish",
        isCorrect: false,
      },
      {
        answer: "crayfish",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of : ",
    answers: [
      {
        answer: "bees",
        isCorrect: false,
      },
      {
        answer: "penguins",
        isCorrect: false,
      },
      {
        answer: " butterflies",
        isCorrect: true,
      },
      {
        answer: "camels",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: "A group of which animals are reffered to as a wake?",
    answers: [
      {
        answer: "bats",
        isCorrect: false,
      },
      {
        answer: "vultures",
        isCorrect: true,
      },
      {
        answer: "eagles",
        isCorrect: false,
      },
      {
        answer: "crows",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: "How many legs does a butterfly has?",
    answers: [
      {
        answer: "2",
        isCorrect: false,
      },
      {
        answer: "6",
        isCorrect: true,
      },
      {
        answer: "4",
        isCorrect: false,
      },
      {
        answer: "8",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question: "Name the birds that migrates from north pole to south pole?",
    answers: [
      {
        answer: "Arctic tern",
        isCorrect: true,
      },
      {
        answer: "crane",
        isCorrect: false,
      },
      {
        answer: "eagles",
        isCorrect: false,
      },
      {
        answer: "sparrows",
        isCorrect: false,
      },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");
const resType = document.querySelector(".resType");

let questionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAns;
let total = 0;
const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((item) => {
    item.addEventListener("click", (e) => {
      selectedAns = e.target.value;
    });
  });
};
const playAgain = () => {
  questionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  selectedAns;
  total = 0;
  showQuestion(questionIndex);
};
play.addEventListener("click", () => {
  resultScreen.style.display = `none`;
  gameScreen.style.display = `block`;
  playAgain();
});
const showQuestion = (qNumber) => {
  if (questionIndex === data.length) return showResult();
  selectedAns = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `<div class="answer">
        <input type="radio" name="answer" id="${index}" value="${item.isCorrect}">
        <label for="${index}">${item.answer}</label>
        </div>`
    )
    .join("");
  selectAnswer();
};
showQuestion(questionIndex);

const submitAns = () => {
  submit.addEventListener("click", () => {
    if (selectedAns !== null) {
      selectedAns === "true" ? correctCount++ : wrongCount++;
      questionIndex++;
      showQuestion(questionIndex);
    } else {
      alert("Select any Input first!");
    }
  });
};
submitAns();
const showResult = () => {
  resultScreen.style.display = `block`;
  gameScreen.style.display = `none`;
  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers : ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers : ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Total Score is : ${
    (correctCount - wrongCount) * 10
  }`;
  total = (correctCount - wrongCount) * 10;
  console.log(total);
  if (total < 10) {
    resType.textContent = `Better Luck Next Time`;
  } else {
    resType.textContent = `Congratulations!`;
  }
};
