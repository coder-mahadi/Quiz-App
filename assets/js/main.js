const start_btn = document.querySelector(".start_btn button")
const quiz_section = document.querySelector(".quiz_rules")
const exit_quiz = document.querySelector(".exit_quiz")
const continue_quiz = document.querySelector(".continue_quiz")
const quiz_questions = document.querySelector(".quiz_questions")
const footer_btn_ques = document.querySelector(".footer_btn_ques button")

//Page change script
start_btn.onclick = () => {
    quiz_section.classList.add("active")
}
exit_quiz.onclick = () => {
    quiz_section.classList.remove("active")
}
continue_quiz.onclick = () => {
    quiz_questions.classList.add("active")
    getQuestion(0)
    ques_bottom_count(0)
    startTime(timeSeconds)
    progressBar()
}

//Question dynamic script
function getQuestion(index) {
    const question_selector = document.querySelector(".question")
    question_selector.innerHTML = `<p> ${questions[index].question} </p>`
    const options = document.querySelector(".options")
    options.innerHTML = `
    <p class="option_content">${questions[index].options[0]}</p>
    <p class="option_content">${questions[index].options[1]}</p>
    <p class="option_content">${questions[index].options[2]}</p>
    <p class="option_content">${questions[index].options[3]}</p>`
    //Option answers check
    const options_content = document.querySelectorAll(".options .option_content")
    for (let i = 0; i < options_content.length; i++) {
        options_content[i].setAttribute("onclick", "correctAnswer(this)")
    }
}

const next_quiz = document.querySelector(".next_quiz")
let ques_count = 0;
next_quiz.onclick = () => {
    if (ques_count < questions.length - 1) {
        ques_count++
        getQuestion(ques_count)
        ques_bottom_count(ques_count)
        footer_btn_ques.style.display = "none"
    } else {
        console.log("Quiz Complete")
    }
    startTime(timeSeconds)
    progressBar()

}

function ques_bottom_count(index) {
    const bottom_count = document.querySelector(".ques_count")
    bottom_count.innerHTML = `
    <span>${index + 1} of ${questions.length} Questions</span>
    `
}
let crossIcon = '<div class="cross"><i class="fa-solid fa-xmark"></i></div>'
let rightIcon = '<div class="cheek"><i class="fa-solid fa-check"></i></div>'
function correctAnswer(answer) {
    clearInterval(timeCount)
    let userAnswer = answer.textContent;
    let trimUserAns = userAnswer.trim()
    const CorrectAnswer = questions[ques_count].answer
    const options_content = document.querySelectorAll(".options .option_content")
    if (trimUserAns == CorrectAnswer) {
        answer.classList.add("active")
        answer.insertAdjacentHTML("beforeend", rightIcon)
    } else {
        answer.classList.add("inactive")
        answer.insertAdjacentHTML("beforeend", crossIcon)
        for (let i = 0; i < options_content.length; i++) {
            if (options_content[i].textContent == CorrectAnswer) {
                options_content[i].classList.add("active")
                options_content[i].insertAdjacentHTML("beforeend", rightIcon)
            } else {


            }
        }

    }

    for (let i = 0; i < options_content.length; i++) {
        options_content[i].classList.add("disable")
    }

    footer_btn_ques.style.display = "block"
}
const time_counter_span = document.querySelector(".time_counter span:nth-child(2)")
let timeCount;
let timeSeconds = 5
function zeroToAns() {
    clearInterval(timeCount)
    const options_content = document.querySelectorAll(".options .option_content")
    const CorrectAnswer = questions[ques_count].answer
    for (let i = 0; i < options_content.length; i++) {
        if (options_content[i].textContent == CorrectAnswer) {
            options_content[i].classList.add("active")
            options_content[i].insertAdjacentHTML("beforeend", rightIcon)
            footer_btn_ques.style.display = "block"
        }
        options_content[i].classList.add("disable")
    }
}
function startTime(time) {
    timeCount = setInterval(timer, 1000)
    function timer() {
        time_counter_span.textContent = time
        time--
        if (time < 9) {
            let addZero = time_counter_span.textContent
            time_counter_span.textContent = 0 + addZero
        }
        if (time < 0) {
            time_counter_span.textContent = "00";
        }
        if (time < 0) {
            zeroToAns()
        }
    }

}
function progressBar() {
    let progress = document.querySelector(".progress_bar")
    let progressResult = ((ques_count + 1) / questions.length) * 100
    progress.style.width = `${progressResult}%`
}