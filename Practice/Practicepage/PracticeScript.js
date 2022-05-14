`use strict`;
writeQuestion();

function result() {
  let score = 0;
  let string = "";

  for (let i = 1; i <= 10; i++) {
    let Answer = document.querySelector(`input[name="Question${i}"]:checked`);
    if (Answer != null)
      if (iscorrect(document.getElementById(`Q${i}`).textContent) === Answer.value) score++;
  }

  let CurrentAccount = localStorage.getItem("CurrentAccount");
  let AccountArray = localStorage.getItem("Account").split("_");

  for (let i = 0; i < AccountArray.length; i++) {
    let Array = AccountArray[i].split(",");
    if (Array[0] === CurrentAccount) {
      string = string + `${Array[0]},${Array[1]},${Array[2]},${Array[3]}${score}._`;
    } else string = string + `${Array[0]},${Array[1]},${Array[2]},${Array[3]}_`;
  }

  localStorage.setItem("Account", string.slice(0, string.length - 1));
  window.location.replace("../resultpage/PracticeResultPage.html");
}

function iscorrect(Question) {
  const string = window.localStorage.getItem("Question");
  let Questionarray = string.split("_");
  for (let i = 0; i < Questionarray.length; i++) {
    let array = Questionarray[i].split(",");
    if (Question === array[0]) return array[5];
  }
}

function writeQuestion() {
  /*array
    0: question
    1: Answer1
    2: Answer2
    3: Answer3
    4: Answer4
    5: correct Answer
    6: hint*/
  let arrayNumber = new Array();
  let QuestionNo;
  for (let i = 1; i <= 10; i++) {
    const string = window.localStorage.getItem("Question");
    let Questionarray = string.split("_");

    while (true) {
      let flag = true;
      QuestionNo = Math.floor(
        Math.random() * Number(string.slice(string.length - 2, string.length))
      );

      for (let i = 0; i < arrayNumber.length; i++) {
        if (QuestionNo == arrayNumber[i]) {
          flag = false;
          break;
        }
      }

      if (flag) {
        arrayNumber.push(QuestionNo);
        break;
      }
    }

    let Question = Questionarray[QuestionNo];
    let array = Question.split(",");
    document.write("<section>");
    document.write(`<p class="Question" id="Q${i}">${array[0]}</p>`);

    for (let j = 1; j <= 4; j++) {
      document.write(`<div class="Answer${j}">`);
      document.write(
        `<input type="radio" value="${array[j]}" id="Q${i}A${j}" name="Question${i}" />`
      );
      document.write(`<label for="Q${i}A${j}">${array[j]}</label>`);
      document.write(`</div>`);
    }
    document.write(`<button onclick="alert('${array[6]}')" class="hint">Hint</button>`);
    document.write("</section>");
  }
}
