// time
let a;
let date;
let time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("time").innerHTML = time + "<br>on " + date;
}, 1000);

//webcam
async function main () {
  const buttonStart = document.querySelector('#buttonStart')
  const buttonStop = document.querySelector('#buttonStop')
  const videoLive = document.querySelector('#videoLive')
  const videoRecorded = document.querySelector('#videoRecorded')

  const stream = await navigator.mediaDevices.getUserMedia({ // <1>
    video: true,
    audio: true,
  })

  videoLive.srcObject = stream

  if (!MediaRecorder.isTypeSupported('video/webm')) { // <2>
    console.warn('video/webm is not supported')
  }

  const mediaRecorder = new MediaRecorder(stream, { // <3>
    mimeType: 'video/webm',
  })

  buttonStart.addEventListener('click', () => {
    mediaRecorder.start() // <4>
    buttonStart.setAttribute('disabled', '')
    buttonStop.removeAttribute('disabled')
  })

  buttonStop.addEventListener('click', () => {
    mediaRecorder.stop() // <5>
    buttonStart.removeAttribute('disabled')
    buttonStop.setAttribute('disabled', '')
  })

  mediaRecorder.addEventListener('dataavailable', event => {
    videoRecorded.src = URL.createObjectURL(event.data) // <6>
  })
}

main()
// const video = document.getElementById("video");
// async function startWebcam() {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     video.srcObject = stream;
//   } catch (err) {
//     console.error("Error accessing webcam:", err);
//   }
// }

// startWebcam();



//logout
function handleLogout() {
  localStorage.removeItem("success");
  localStorage.removeItem("loginType");
  hideShow();
}

function hideShow() {
  if (localStorage.getItem("success") !== "true") {
    window.location.href = "../login/index.html";
  }
}
hideShow();

//quiz

const quizData = [];
let val = localStorage.getItem("itemsJson");
console.log(JSON.parse(val));
let data = JSON.parse(val);
for (let i = 0; i < data.length; i++) {
  let question = data[i][0];
  let a = data[i][1];
  let b = data[i][2];
  let c = data[i][3];
  let d = data[i][4];
  let correct = data[i][5];

  console.log(question);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(correct);
  quizData.push({ question, a, b, c, d, correct });
}

let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
  allInputs[4].nextElementSibling.innerText = data.correct;
};

let ansfill = [];
let correctAns = [];
document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  ansfill.push(ans);
  correctAns.push(data.correct);
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  let josnansfill = JSON.stringify(ansfill);
  localStorage.setItem("userfillans", josnansfill);
  localStorage.setItem("correctAns", correctAns);

  loadQuestion();
});

const getAnswer = () => {
  let ans;

  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

// const quizEnd = () => {
// // console.log(document.getElementsByClassName("container"));
// document.getElementsByClassName("container1")[0].innerHTML = `
//     <div class="col">
//         <h3 class="w-100"> you've scored ${correct} / ${total} </h3>
//     </div>
// `
// }
// loadQuestion(index);

//next button
// document.getElementById('nextButton').addEventListener('click', function() {
//     // Navigate to the desired HTML page
//     window.location.href = 'next_page.html';
// });

const quizEnd = () => {
  const percentage = (correct / total) * 100;
  let user = localStorage.getItem("userName");
  document.getElementsByClassName("container1")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> ${user} your score is ${correct} / ${total} (${percentage.toFixed(
    2
  )}%) </h3>
            <p>Correct Answers: ${correct}</p>
            <p>Incorrect Answers: ${total - correct}</p>
            <div class="d-flex justify-content-center">
                 <button class="btn btn-primary mx-auto" onclick="generatePDF()">PDF</button>            
                 <button class="btn btn-primary mx-auto" onclick="goToNextPage()" >User-answer</button>            
            </div>
        </div>
     
  

    `;
};
loadQuestion(index);

//next userans.html
function goToNextPage() {
  // Navigate to the next HTML page
  window.location.href = "userans.html";
}

//pdf
function generatePDF() {
  // Select the HTML element you want to convert to PDF
  const element = document.body;

  // Options for PDF generation
  const options = {
    filename: "newFile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // Call html2pdf function with options
  html2pdf().from(element).set(options).save();
}
