let shuffle_Question = [
    {
        num: 1,
        question: "What is the correct syntax for declaring a variable in JavaScript?",
        answer: "All of the above",
        options: [
            "var myVariable = 'Hello'",
            "let myVariable = 'Hello'",
            "const myVariable = 'Hello'",
            "All of the above"
        ]
    },
    {
        num: 2,
        question: "What is the correct way to add comments in JavaScript?",
        answer: " // This is a comment",
        options: [
            "< ! - This is a comment - >",
            "// This is a comment",
            "/* This is a comment */",
            " !-- This is a comment"
        ]
    },
    {
        num: 3,
        question: "What is the output of the following code: console.log(1 + '2' + 3)",
        answer: "'123'",
        options: [
            "123",
            "6",
            "'123'",
            "'15'"
        ]
    },
    {
        num: 4,
        question: "What is the difference between == and === in JavaScript?",
        answer: "== compares only values, === compares values and data types",
        options: [
            "There is no difference",
            "== compares values and data types, === compares only values",
            " == compares only values, === compares values and data types",
            " === compares strings, == compares numbers"
        ]
    },
    {
        num: 5,
        question: "What is the correct way to declare a function in JavaScript?",
        answer: " All of the above",
        options: [
            "function myFunction() {}",
            "let myFunction() {}",
            " const myFunction() => {}",
            " All of the above"
        ]
    },
    {
        num: 6,
        question: "What is the purpose of the this keyword in JavaScript?",
        answer: " All of the above",
        options: [
            " It refers to the current HTML element",
            "It refers to the parent HTML element",
            "It refers to the current JavaScript function",
            " It refers to the current object"
        ]
    }
];

//Shuffle question
let questions = []
let shuffle_index = []
let i = 0;
while (i < shuffle_Question.length) {
    let shuffleCount = Math.floor(Math.random() * shuffle_Question.length)
    if (!shuffle_index.includes(shuffleCount)) {
        questions.push(shuffle_Question[shuffleCount]);
        shuffle_index.push(shuffleCount);
        i++
    }
}
