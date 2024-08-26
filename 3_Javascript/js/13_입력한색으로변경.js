// 풀버전
// const colorInput = document.querySelectorAll(".color-input");
// const box = document.querySelectorAll(".box");
// const changeButton = document.querySelector("#changeButton");

// changeButton.addEventListener("click",function(){
//   for(let i=0; i<box.length; i++) {
//     box[i].style.backgroundColor = colorInput[i].value;
//   }
// });
//-------------------------------------------------------------------------------
// 가장 축약한 버전(변수 선언안하고 바로 불러올 수 있음!)
// document.querySelector("#changeButton").addEventListener("click", function () {
//   for (let i = 0; i < document.querySelectorAll(".box").length; i++) {
//     document.querySelectorAll(".box")[i].style.backgroundColor = document.querySelectorAll(".color-input")[i].value;
//   }
// });
//--------------------------------------------------------------------------------
// 절충한 버전
const inputList = document.querySelectorAll(".color-input");
const boxList = document.querySelectorAll(".box");

document.querySelector("#changeButton").addEventListener("click", function () {
  for (let i = 0; i < inputList.length; i++) {
    boxList[i].style.backgroundColor = inputList[i].value;
  }
});