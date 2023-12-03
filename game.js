const quizData =[
    {
        question :" What does HTML stand for? ",
        a:"Hyper Text Markup Language",
        b: "High Tech Multimedia Language",
        c: "Hyperlink and Text Manipulation Language",
        d: "Home Tool Management Language",
        correct:"a",
    },
    {
        question :"In web development, what is the primary purpose of CSS? ",
        a:"Controlling the structure of a webpage",
        b:"Adding interactivity to a webpage",
        c:"Styling the presentation of a webpage",
        d:"Managing server-side scripting",
        correct:"c",
    },
    {
        question :"What is the purpose of the dollar sign ($) in PHP?",
        a:"It denotes a constant variable",
        b:"It signifies a string datatype",
        c:"It indicates the start of a comment",
        d:"It is used to declare and access variables",
        correct:"d",
    },
    {
        question :"In CSS, which property is used to control the space between the outer edge of an element's box and surrounding elements? ",
        a:"Margin",
        b:"padding",
        c:"border",
        d:"spacing",
        correct:"a",
    },
    {
        question :"What new semantic elements were introduced in HTML5 to improve document structure and clarify the meaning of content?  ",
        a:"<div> and <span>",
        b:"<section>, <article> <nav> and <header>",
        c:"<format> and <style>",
        d:" <markup> and <content>",
        correct:"b",
    }
];
const quiz=document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const d_text =document.getElementById('d_text')
const submitBtn =document.getElementById('submit')

let currentQuiz=0
let score =0
loadQuiz()

function loadQuiz() {
    deselectAnswers(); // Correct function name

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// ... (Previous code)

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer = undefined; // Initialize answer variable
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    console.log("Selected Answer:", answer);
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Play Again</button>
            `;
        }
    }
});