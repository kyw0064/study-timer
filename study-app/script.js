let sec = 0;
let interval = null;

// 오늘 날짜 키 (안전)
const now = new Date();
const todayKey =
  now.getFullYear() + "-" +
  String(now.getMonth() + 1).padStart(2, "0") + "-" +
  String(now.getDate()).padStart(2, "0");

// 저장된 시간 불러오기
const saved = localStorage.getItem(todayKey);
if (saved !== null) {
  sec = Number(saved);
  update();
}

function start() {
  if (interval) return;
  interval = setInterval(() => {
    sec++;
    localStorage.setItem(todayKey, sec);
    update();
  }, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function update() {
  const h = String(Math.floor(sec / 3600)).padStart(2, "0");
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  const t = `${h}:${m}:${s}`;

  document.getElementById("timer").innerText = t;
  document.getElementById("todayTime").innerText =
    "오늘 공부: " + t;
}
function toggleMode() {
  document.body.classList.toggle("light");
}