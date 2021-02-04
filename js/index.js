var questions = [
  {
    name: "На входе в университет вас останвливает охранник и спрашивает с какого вы факультета.",
    answers: [
      "Философкий",
      "Райвенкло",
      "Я просто погреться хочу",
      "в душе не ебу",
    ]
  },
  {
    name: "А борт помыла?",
    answers: [
      "Аборт это грех",
      "Борт был чист",
      "Какой блять борт?",
    ]
  },
  {
    name: "Пробудившись от иллюзии существования, вы вспомнили что находитесь в демо-версии симуляции от компании Plague Inc и решили создать вирус. На этот раз его симптомами будут:",
    answers: [
      "Приступы счастья и эйфории при мыслях о бессмысленности жизни, которые заканчиваются летальным исходом.",
      "Зависимость от просмотра прикольных видео в тик-токе",
      "Спонтанные флешбеки из далекого прошлого, которые не несут в себе никакой ценности",
      "Непродолимое желание получить психоделичный опыт",
    ]
  },
  {
    name: "На часах 03:28, самое время?",
    answers: [
      "Занюхать дорогу и уснуть",
      "Пойти в бар",
      "Сонный паралич. ммм ебанина😉",
      "Сегодня-же курсовую сдавать нужно... Какая там была тема, говоришь?",
    ]
  },
  {
    name: "Идя по улице вы заметили, что в вашу сторону направляется сотрудник правохранительных органов, ваша реакция?",
    answers: [
      "Бей или беги",
      "Замру в оцепенении, вдруг он меня не заметит",
      "Подойду к нему первым(ой) стрельнуть сигарету",
      "Похуй",
    ]
  },
  {
    name: "Вы решили создать свой аутентичный бар, главным правилом которого является:",
    answers: [
      "Лица старше 20 лет не допускаются",
      'Прежде чем зайти в заведение посетитель должен продолжить строчку из случайной песни "Дайте танк"',
      "Человек, который придумает интересный или (и) интерактивный тост получает в подарок напиток",
      "До тех пор, пока у посетителя есть деньги, он не может выйти из бара. ",
    ]
  },
  {
    name: "Что ты делаешь с людьми?",
    answers: [
      "Стою с ними в метро",
      'Достаю их на юбилей',
      "Терпеливо выгуливаю по утрам",
      "в душе не ебу",
    ]
  },
  {
    name: "Чего ты больше всего боишься?",
    answers: [
      "Собак",
      'Оставаться одна в квартире',
      "Незнакомые слова",
      "Пчел",
    ]
  },
  {
    name: "Какой ты динозавр? <em>Загугли, прежде чем выбирать.</em>",
    answers: [
      'Алкозавр',
      "Апатозвр",
      "Суперзавр",
      "Ямацератопс",
      "МДМАйюнгазавр",
      "я блять плита"
    ]
  },
  {
    name: "Твоя любимая группа :",
    answers: [
      "дайте электрофорез",
      "4 позиции мельницы",
      "Алена Стрыкало",
      "Порез на Танке"
      "Сатана печет Буерак"
    ]
  }
]

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
      questionList.innerHTML = "<h2>Хуй знает... Ты блять плита!</h2>";
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
