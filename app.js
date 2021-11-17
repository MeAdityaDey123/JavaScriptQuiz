const challengeAcceptedBtn = document.querySelector(".challenge-accepted-btn");
const homePage = document.querySelector(".home-page")
const form = document.querySelector("form")
const questionPage = document.querySelector(".questions-page")
const resultPage = document.querySelector(".result-page")
const correctAnswers = ["B", "A", "A", "B"];
const percent = document.querySelector(".percent")

challengeAcceptedBtn.addEventListener("click", () => {
    homePage.style.display = "none"
})

form.addEventListener("submit", eve => {
    eve.preventDefault()

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25;
        }
    })

    questionPage.style.display = "none";

    let output = 0;

    const timer = setInterval(() => {
        percent.textContent = `${output}%`;
        output++;
        if (output === score+1) {
            clearInterval(timer);
        }
    }, 10)
})