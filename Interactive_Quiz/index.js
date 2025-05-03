const questions = [
    { 
        question: "In which year did the Titanic sink?", 
        options: ["1905", "1912", "1920", "1896"], 
        answer: "1912" 
    },
    { 
        question: "What is the capital of Japan?", 
        options: ["Kyoto", "Osaka", "Seoul", "Tokyo"], 
        answer: "Tokyo" 
    },
    { 
        question: "Which is the largest planet?", 
        options: ["Earth", "Mars", "Jupiter", "Saturn"], 
        answer: "Jupiter" 
    },
    { 
        question: "What is the largest organ in the human body?", 
        options: ["Skin", "Liver", "Heart", "Brain"], 
        answer: "Skin" 
    },
    { 
        question: "What is the chemical symbol for gold?", 
        options: ["Ag", "Fe", "Pt", "Au"], 
        answer: "Au" 
    }

];


function updateProgressBar() {
    let progressBar = document.querySelector("#progress_bar_id .progress-bar");
    let currentWidth = parseInt(progressBar.style.width) || 0;
    let newWidth = Math.min(currentWidth + 20, 100); 

    progressBar.style.width = `${newWidth}%`;
}




let index = 0;
let score = 0;

function showQuestion() {
    document.querySelector(".que_no").innerText = `Question No.${index + 1}`;
    document.querySelector(".que_dis").innerText = questions[index].question;
    
    const optionsList = document.querySelectorAll(".list-group-item");
    optionsList.forEach((optionItem, i) => {
        let radio = optionItem.querySelector("input");
        let label = optionItem.querySelector("label");
        radio.checked = false;
        radio.value = questions[index].options[i];
        label.innerText = questions[index].options[i];
    });
}

function checkAnswer() {
    let selectedOption = document.querySelector('input[name="listGroupRadio"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }
    if (selectedOption.value === questions[index].answer) {
        score++;
    }
    index++;
    updateProgressBar();
    if (index < questions.length) {
        showQuestion();
    } else {
        alert1();
        showResult();
    }
}

function alert1()
{
    document.querySelector(".main_contain").innerHTML = "";
    alert("Quiz Over Successfully.");

}


function showResult() {
    document.querySelector(".nav_div").innerHTML = "🌟 Quiz Results 🌟";
    
    document.querySelector(".main_contain").innerHTML = `
      <div style="
        text-align: center;
        background-color: #1e1e2f;
        padding: 60px;
        border-radius: 30px;
        box-shadow: 0 12px 24px rgba(0,0,0,0.3);
        color: #fff;
        position: relative;
        overflow: hidden;
      ">
        <div class="confetti-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></div>
        
        <h1 style="font-size: 3rem; color: #FFD700; animation: popIn 0.5s ease;">
          🎉 Woohoo! 🎉
        </h1>
        <p style="font-size: 1.5rem; color: #FFDAB9;">
          You nailed it! Quiz Complete.
        </p>
        <h2 style="color: #00E676; margin-top: 30px; font-size: 2.5rem;">
          Your Score: <span style="color: #FF4081;">${score}</span> / ${questions.length}
        </h2>
        <p style="margin-top: 20px; font-size: 1.2rem; color: #90CAF9;">
          You're unstoppable! Keep pushing your limits! 🚀
        </p>
  
        <button onclick="restartQuiz()" style="
          margin-top: 30px;
          background-color: #00C853;
          color: white;
          border: none;
          padding: 15px 30px;
          font-size: 1.2rem;
          border-radius: 30px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        " onmouseover="this.style.backgroundColor='#00E676'" onmouseout="this.style.backgroundColor='#00C853'">
          🔄 Play Again
        </button>
      </div>
      
      <style>
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      </style>
    `;
  
  }
  
  
  function restartQuiz() {
    location.reload();
  }

document.querySelector(".sub_but_div button").addEventListener("click", checkAnswer);
document.addEventListener("DOMContentLoaded", showQuestion);
