var questionList = document.getElementById("test-questions");
var button;
var questionNumber = 0;

addQuestion(questionList);






function addQuestion(node) {
  var parentNode = addElement("div","question_item",null);
  questionList.appendChild(parentNode);
  parentNode.appendChild(addElement("h3","question_item_name",questions[questionNumber].name));

  var radio;
  for (let j = 0; j < questions[questionNumber].answers.length; j++) {
    var questionAnswer = addElement("div","question_item_answer",null)
    parentNode.appendChild(questionAnswer);
    radio = addElement("input","question_item_answer",null);
    radio.name = "question" + [questionNumber];
    radio.id = "question" + [questionNumber] + "_answer" + [j];
    radio.setAttribute("type","radio");
    questionAnswer.appendChild(radio);

    var radioLabel = addElement("label","question_item_answer",questions[questionNumber].answers[j]);
    radioLabel.setAttribute("for",radio.id);
    questionAnswer.appendChild(radioLabel);
  }

  button = addElement("button","question_item_button","Ответить");
  button.setAttribute("type","submit");
  questionList.appendChild(button);

  button.onclick = function() {
    if (questionNumber < questions.length - 1) {
      if (document.querySelector('input[name="'+ radio.name + '"]:checked') !== null) {
        questionList.innerHTML = null;
        questionNumber++;
        addQuestion(questionList);
      } else {
        alert("Да определись ты уже блять!")
      }
    } else {
      finishTest();
    }
  }
}

function addElement(tag,cName,content) {
  var element = document.createElement(tag);
  element.className = cName;
  if (content !== null) {
    element.innerHTML = content;
  }

  return element;
}

function finishTest() {
  questionList.innerHTML = null;
  var i = Math.floor(Math.random()*results.length);
  questionList.appendChild(addElement("h1","finish","Результаты теста:"));
  questionList.appendChild(addElement("h2","finish",results[i].name));
  questionList.appendChild(addElement("p","finish",results[i].desk));
  questionList.appendChild(addElement("img","finish_image",null));
  questionList.lastChild.src = results[i].img;
}
