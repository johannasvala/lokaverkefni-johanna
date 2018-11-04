var container = document.getElementById('quizDiv');

var quizObjects = [
  {
    title: 'Question #1',
    img: ['./images/formA.jpg', './images/formB.png'],
    hint: 'An external appearance of a clearly defined area, as distinguished from color or material.',
    correctAnswer: 'Form',
    button: 'check',
  },
  {
    title: 'Question #2',
    img: ['./images/followsA.png', './images/followsB.png'],
    hint: 'To come after in sequence, order of time etc. To go or come after, move behind in same direction.',
    correctAnswer: 'Follows',
    button: 'check'
  },
  {
    title: 'Question #3',
    img: ['./images/fuckingA.png', './images/fuckingB.png'],
    hint: 'The pairing of two humans for the purpose of reproduction or pleasure',
    correctAnswer: 'Fucking',
    button: 'check'
  },
  {
    title: 'Question #4',
    img: ['./images/functionA.png', './images/functionB.png'],
    hint: 'A block of code designed to perform a particular task',
    correctAnswer: 'Function',
    button: 'check'
  }
];

var value = 0;
var score = 0; // Birta þessa breytu í html

function startQuiz() {
    renderElement(quizObjects[value]);

}

function renderElement(quizItem){

for(var i = 0; i<quizObjects.length; i++) {
    if(quizObjects[i].img)

    console.log(quizObjects[i].img)

    quizDiv.innerHTML = `
    <div id="questions">
        <span id="stig">Your score: ${score}</span>
        <h1>${quizItem.title}</h1>
        <h4>We are looking for a word. What is it?<h4>
        <div id="box-holder">
            <img class="opt1" src="${quizItem.img[0]}">
            <img class="opt2" src="${quizItem.img[1]}">
            <h3><span>Hint:</span><br> ${quizItem.hint}</h3>
        </div>
        <input class="word" placeholder="Write your answer here" />
        <button class="check" onclick="check()">${quizItem.button}</button>
    </div>
    `
    }
}

var check = function(){

    console.log(value)

    var input = document.querySelector(".word")
    var guess = input.value;
    var rightAnswer = quizObjects[value].correctAnswer;

    if(guess.toUpperCase() === rightAnswer.toUpperCase()){

        score += 10;
        console.log("score:" + score) // Skrifum út score í console til að fylgjast með þar til þetta er birt í html

        if(value === 3){
            finished();
            return
        }

        value++;

        renderElement(quizObjects[value])

    } else {
        if(score>10){ // Drögum bara stig frá ef einhver eru fyrir til að fara ekki í mínus.
          score -= 10;
        }
        console.log("score:" + score) // Skrifum út score í console til að fylgjast með þar til þetta er birt í html
        alert("Nei hættu nú alveg! Reyndu aftur (ertu búin/n að lesa hint-ið?)")
    }
}

var finished = function(){
    var final = document.querySelector("#finalDiv").style.display = "block";
    quizDiv.style.display = "none";

    console.log(final)
}
