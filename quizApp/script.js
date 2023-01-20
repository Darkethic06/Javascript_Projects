const quiz = [
    {
        question: "Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "b"
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "d"
    },
    {
        question: "The 'function' and 'var' are known as:",
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans: "c"
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
        ans: "b"
    }
]
const ansEl = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const a = document.getElementById("a_text")
const b = document.getElementById("b_text")
const c = document.getElementById("c_text")
const d = document.getElementById("d_text")
const submit = document.getElementById("btn")
let score = 0
let currentQuiz = 0



loadQuestion()


function loadQuestion() {
    deselectAnswer()

    let currentQuizData = quiz[currentQuiz]

    question.innerHTML = currentQuizData.question
    a.innerText = currentQuizData.a
    b.innerText = currentQuizData.b
    c.innerText = currentQuizData.c
    d.innerText = currentQuizData.d
}

function deselectAnswer() {
    ansEl.forEach(ansEl => {
        ansEl.checked = false
    })
}

function getSelected() {
    let answer
    ansEl.forEach(ansEl => {
        if (ansEl.checked)
            ans = ansEl.id
    })
    return ans
}
submit.addEventListener("click", () => {
    const answer = getSelected()
    // console.log(answer)
    if (answer) {
        if (answer === quiz[currentQuiz].ans) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quiz.length) {
            loadQuestion()
        } else {
            document.getElementById("quiz").innerHTML = `
            <h2 id="result">You answered correctly at ${score}/${quiz.length}</h2>

            <button id="btn2" onclick="location.reload()">Reload</button>
            `

        }
    }
})