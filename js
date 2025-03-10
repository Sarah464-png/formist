// 定义问答数据
const questions = [
    {
        question: "你好呀小朋友！请问怎么称呼你呢？",
        options: ["bys", "小雾", "宝宝", "外星人"],
        answers: {
            "bys": "bys要被妖怪抓走啦",
            "小雾": "要牵紧姐姐的手哦",
            "宝宝": "哇哇哇~~~你好呀宝宝",
            "外星人": "你看那里有个UFO！"
        }
    },
    {
        question: "宝宝，你知道今天是什么日子嘛",
        options: ["3月28日", "8月32日"],
        answers: {
            "3月28日": "对啦，聪明宝宝真棒！那么下一个问题是……",
            "8月32日": "嘻嘻，你傻傻。"
        }
    },
    {
        question: "聪明宝宝最最最喜欢最可爱的女朋友是谁呀？",
        options: ["ZZQ", "zzq"],
        answers: {
            "ZZQ": "嗯哼超骄傲的！在这个特别特别的日子里~ZZQ祝最聪明最可爱最帅气的syb宝宝——生日快乐哦！快去找她领取你的专属亲亲吧~",
            "zzq": "嘻嘻嘻嘻！今天是个好日子~zzq祝最帅气最可爱最聪明的syb宝宝——生日快乐哦！快去找她领取你的专属抱抱吧~。"
        }
    }
];

let currentQuestionIndex = 0;
const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const responseSectionElement = document.getElementById('response-section');

// 显示当前问题及选项
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTextElement.textContent = currentQuestion.question;
    answerButtonsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => handleAnswer(option));
        answerButtonsElement.appendChild(button);
    });
}

// 处理答案
function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const response = currentQuestion.answers[selectedOption];
    responseSectionElement.innerHTML = `<p>${response}</p>`;

    // 判断当前问题是第一个问题的情况
    if (currentQuestionIndex === 0 && selectedOption === "宝宝") {
        currentQuestionIndex++;
        showQuestion();
    } else if (currentQuestionIndex === 0 && selectedOption!== "宝宝") {
        responseSectionElement.innerHTML += `<p>再来一次嘛</p>`;
        currentQuestionIndex = 0;
        showQuestion();
    } 
    // 判断当前问题是第二个问题的情况
    else if (currentQuestionIndex === 1 && selectedOption === "3月28日") {
        currentQuestionIndex++;
        showQuestion();
    } else if (currentQuestionIndex === 1 && selectedOption!== "3月28日") {
        responseSectionElement.innerHTML += `<p>再想想嘛</p>`;
        currentQuestionIndex = 1;
        showQuestion();
    } 
    // 其他问题正常进入下一题
    else if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// 初始化显示第一个问题
showQuestion();
