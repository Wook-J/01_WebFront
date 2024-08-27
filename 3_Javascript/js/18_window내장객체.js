// window.setTimeout(함수, 지연시간(ms))
document.getElementById("btn1").addEventListener("click", () => {
  setTimeout(() => { alert("1.5초 후 출력!"); }, 1500);
});

// window.setInterval(함수, 지연시간(ms))
let interval;                   // setInterval을 저장하기 위한 전역 변수

function currentTime() {         // 현재 시간을 문자열로 반환해주는 함수
  const now = new Date();
  // console.log(now);

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  // console.log(hour, min, sec);       // 시분초가 한자리수 일때 앞에 0있어야 덜 어색함
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  return hour + " : " + min + " : " + sec;
}

function clockFn(){
  const clock = document.getElementById("clock");
  clock.innerText = currentTime();

  interval = setInterval(()=>{
    clock.innerText = currentTime();
  }, 1000);
}

clockFn();      // 함수 호출

document.getElementById("stop").addEventListener("click", ()=>{
  clearInterval(interval);
});

// currentTime();