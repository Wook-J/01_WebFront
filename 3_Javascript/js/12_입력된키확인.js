// 문자열.toLowerCase() : 문자열이 영어라면 모두 '소문자'로 변경
// 문자열.toUpperCase() : 문자열이 영어라면 모두 '대문자'로 변경

const keyboard = document.querySelectorAll(".key");
// console.log(keyboard);

// 선생님 풀이방법
document.addEventListener("keydown", function (e) {
  let idx;                          // 인덱스 값을 저장할 변수

  switch (e.key.toLowerCase()) {
    case "q": idx = 0; break;
    case "w": idx = 1; break;
    case "e": idx = 2; break;
    case "r": idx = 3; break;
    default: return;                // 함수 종료
  }
  keyboard[idx].style.backgroundColor = "violet";
});

document.addEventListener("keyup", function (e) {
  let idx;                          // 인덱스 값을 저장할 변수

  switch (e.key.toLowerCase()) {
    case "q": idx = 0; break;
    case "w": idx = 1; break;
    case "e": idx = 2; break;
    case "r": idx = 3; break;
    default: return;                // 함수 종료
  }
  keyboard[idx].style.backgroundColor = "transparent";
});
//-------------------------------------------------------------------------------------------
// 내 풀이 방법
// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   switch (e.key.toLowerCase()) {
//     case "q": keyboard[0].style.backgroundColor = "violet"; break;
//     case "w": keyboard[1].style.backgroundColor = "violet"; break;
//     case "e": keyboard[2].style.backgroundColor = "violet"; break;
//     case "r": keyboard[3].style.backgroundColor = "violet"; break;
//     default: return;      // 함수 종료
//   }
// });

// document.addEventListener("keyup", function () {
//   for (let i = 0; i < keyboard.length; i++) {
//     keyboard[i].style.backgroundColor = "transparent";
//   }
// });
// -------------------------------------------------------------------------------------------
// if문으로 구성하는 경우
// document.addEventListener("keydown",function(e){
//   if(e.key =="q" || e.key == "Q"){
//     keyboard[0].style.backgroundColor = "violet";
//   }
//   if(e.key =="w" || e.key == "W"){
//     keyboard[1].style.backgroundColor = "violet";
//   }
//   if(e.key =="e" || e.key == "E"){
//     keyboard[2].style.backgroundColor = "violet";
//   }
//   if(e.key =="r" || e.key == "R"){
//     keyboard[3].style.backgroundColor = "violet";
//   }
// });