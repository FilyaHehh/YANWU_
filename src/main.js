let quizData = [
    {
        question: "КАКОЕ ВРЕМЯ СУТОК ТЫ ЛЮБИШЬ БОЬЛШЕ ВСЕГО?",
        options: ["Раннее утро, когда все просыпается", "Полдень, когда солнце в зените", "Сумерки, между днём и ночью", "Ночь, время тайн и одиночества"],
        correct: "",
    },

    {
        question: "ТВОЙ ДРУГ ПОПАЛ В БЕДУ. ТВОИ ДЕЙСТВИЯ?",
        options: ["Буду защищать его, даже если враг сильнее", "Придумаю план, чтобы бесшумно вызволить его", "Сначала оценю, выгодно ли мне в это вмешиваться", "Ворвусь в комнату с грохотом и героически спасу его"],
        correct: "",
    },
    {
        question: "Какой уголок природы тебе ближе?",
        options: ["Берег моря или реки", "Лесная чаща, где легко заблудиться", "Горы и скалы, суровые и неприступные", "Потухший вулкан или место старого пожарища"],
        correct: "",
    },
    {
        question: "Какая эмоция управляет тобой чаще всего?",
        options: ["Верность и чувство долга", "Страсть или печаль", "Любопытство или хитрость", "Гнев"],
        correct: "",
    },
    {
        question: "Что для тебя самое отвратительное в людях?",
        options: ["Скука и серость", "Глупость и недальновидность", "Трусость", "Лживость и неверность"],
        correct: "",
    },
    {
        question: "Какие цвета привлекают тебя больше всего?",
        options: ["Голубой и бежевый", "Красный и белый", "Синий и зелёный", "Золотой и багровый"],
        correct: "",
    },
    {
        question: "Если бы ты жил в городе, какое место ты бы выбрал для «засады»?",
        options: ["Старый заброшенный особняк", "Оживлённая площадь", "Лабиринты подземных переходов", "Крыши небоскрёбов"],
        correct: "",
    },
    {
        question: "Что ты думаешь о правилах?",
        options: ["Есть честь, а есть подлость", "Правила созданы, чтобы их нарушать", "Если правила мешают моим желаниям, их не существует", "Правила — это способ манипулировать"],
        correct: "",
    },
    {
        question: "Какая у тебя заветная мечта?",
        options: ["Защитить тех, кто мне дорог", "Получить от жизни всё и сразу", "Перехитрить судьбу", "Чтобы все признали мою силу"],
        correct: "",
    },
    {
        question: "Что ты чувствуешь, глядя на закат?",
        options: ["Ничего особенного, это просто время суток", "Тихую радость и умиротворение", "Лёгкую грусть и мысль о быстротечеости жизни", "Страсть и желание жить на полную"],
        correct: "",
    },

];

const quiz = document.querySelector(".quiz");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const quizResult = document.querySelector(".quiz-result");

let questionNumber = 0;
const MAX_QUESTIONS = 10;

const createQuestion = () => {
    options.innerHTML = "";
    question.innerHTML = quizData[questionNumber].question;

    quizData[questionNumber].options.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        options.appendChild(option);
    });
};

const displayQuizResult = () => {
    quizResult.style.display = "flex";
    quiz.style.display = "none";
};

createQuestion();

const displayNextQuestion = () => {
    if (questionNumber >= MAX_QUESTIONS - 1) {
        displayQuizResult();
        return;
    }

    questionNumber++;
    createQuestion();
};

nextBtn.addEventListener("click", displayNextQuestion);
