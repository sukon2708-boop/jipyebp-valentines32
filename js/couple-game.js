const questions = [
  {
    q: "กินข้าวกับอะไรอร่อยที่สุด",
    c: ["กินข้าวกับช้อน", "กินข้าวกับเพื่อน", "กินข้าวกับผม ิิ"],
    correct: 0, // ตอบข้อ 1
  },
  {
    q: "สิ่งที่คุณชอบมากที่สุด",
    c: ["เรื่องเพื่อน", "โกโก้", "นายกิติรัตน์ ิิ"],
    correct: 2, // ตอบข้อ 3
  },
  {
    q: "สิ่งที่ทำแล้วมีความสุข",
    c: ["ซักผ้า", "ล้างจาน", "หุงข้าว"],
    correct: 2, // ตอบข้อ 3
  },
  {
    q: "ใครน่ารักกับเธอมากที่สุด",
    c: ["ฉัน", "ผม", "พีชไงจะใครละ"],
    correct: 2, // ตอบข้อ 3
  },
  {
    q: "ผมเชื่อใจคุณไม่ว่าจะยังไง ผมหวังว่าคุณจะเป็นคนที่ใช่สำหรับผม",
    c: ["ใช่", "ไม่ใช่", "ผมเข้าใจเพ"],
    correct: 2, // ตอบข้อ 3
  }
];


let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
