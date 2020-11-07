const quizData = [
    {
        question: 'React is developed by?',
        a: 'Apple',
        b: 'Facebook',
        c: 'Oracle',
        d: 'Microsoft',
        correct: 'b',
    }, 
    {
        question: 'Which is the most used programming language in 2019?',
        a: 'C',
        b: 'Python',
        c: 'Java',
        d: 'JavaScript',
        correct: 'd',
    },
    {
        question: 'HTML stands for?',
        a: 'HighText Machine Language',
        b: 'HyperText and links Markup Language',
        c: 'HyperText Markup Language',
        d: 'None of these',
        correct: 'c',
    },
    {
        question: 'CSS stands for?',
        a: 'Color Style Sheets',
        b: 'Cascade Sheets Style',
        c: 'Cascade Style Sheet',
        d: 'Cascading Style Sheets',
        correct: 'd',
    },
    {
        question: 'What is the HTML tag under which one can write the JavaScript code?',
        a: '<javascript>',
        b: '<scripted>',
        c: '<script>',
        d: '<js>',
        correct: 'c',
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',() => {

    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h1>You answered correctly ${score} / ${quizData.length} questions.</h1>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})