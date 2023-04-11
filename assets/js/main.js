const start_btn = document.querySelector(".start_btn button")
const quiz_section = document.querySelector(".quiz_rules")
const exit_quiz = document.querySelector(".exit_quiz")
const continue_quiz = document.querySelector(".continue_quiz")
const quiz_questions = document.querySelector(".quiz_questions")

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
}

//Question dynamic script
function getQuestion(index) {
    const question_selector = document.querySelector(".question")
    question_selector.innerHTML = `<p> ${questions[index].num}. ${questions[index].question} </p>`
    const options = document.querySelector(".options")
    options.innerHTML = `
    <p> ${questions[index].options[0]} </p>
    <p> ${questions[index].options[1]} </p>
    <p> ${questions[index].options[2]} </p>
    <p> ${questions[index].options[3]} </p>`
}

const next_quiz = document.querySelector(".next_quiz")
let ques_count = 0;
next_quiz.onclick = () => {
    if (ques_count < questions.length - 1) {
        ques_count++
        getQuestion(ques_count)
        ques_bottom_count(ques_count)
    } else {
        console.log("Quiz Complete")
    }
}

function ques_bottom_count(index) {
    const bottom_count = document.querySelector(".ques_count")
    bottom_count.innerHTML = `
    <span>${questions[index].num} of ${questions.length} Questions</span>
    `
}