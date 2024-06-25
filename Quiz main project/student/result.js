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
const video = document.getElementById("video");

async function startWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.error("Error accessing webcam:", err);
  }
}

startWebcam();

const quizEnd = () => {
  const percentage = (correct / total) * 100;
  let user = localStorage.getItem("userName");
  document.getElementsByClassName("container1")[0].innerHTML = `
        <div class="col">

            <h3 class="w-100"> ${user}'ve scored ${correct} / ${total} (${percentage.toFixed(
    2
  )}%) </h3>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary mx-auto" onclick="generatePDF()">PDF</button>
        <button class="btn btn-primary mx-auto" id="nextButton" onclick="goToNextPage()">Next</button>

        </div>
        </div>
     
  

    `;
};
loadQuestion(index);
