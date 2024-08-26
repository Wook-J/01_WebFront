// 인라인 이벤트 모델 확인
function check1(btn) {
  // console.log(btn);
  // 매개변수 btn == 클릭한 버튼(this), button태그가 감싸는 전체가 들어가 있음

  const bgColor = btn.style.backgroundColor;     // 버튼의 배경색을 얻어와 저장
  // console.log(bgColor);    // bgColor의 색깔 확인

  // 버튼이 클릭될때 마다 pink <-> yellow 변경
  if (bgColor == "yellow") {
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }
}
//-------------------------------------------------------------------------
// 고전 이벤트 모델 확인
// HTML 요소 자체에 이벤트를 발생시키는 것이 아님!! JS에서 직접 이벤트 관련 코드 작성

// id가 test1-1인 요소를 얻어와 test1a변수에 저장
const test1a = document.querySelector("#test1-1");      // .getElementById("test1-1")로도 가능

// 고전 이벤트 모델 작성법 : 요소.이벤트리스너 = 이벤트핸들러(함수)

test1a.onclick = function () {
  alert("고전 이벤트 모델 확인 버튼 클릭됨");
};

// 고전 이벤트 모델 제거
// #test1-2 버튼 클릭 시 #test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거
document.querySelector("#test1-2").onclick = function () {

  // test1-1의 기존 onclick 이벤트 핸들러를 null로 덮어씌우기
  test1a.onclick = null;
  alert("이벤트 제거됨");
};

// 고전 이벤트 모델 단점
// #test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// test1c 요소가 클릭되었을 때 배경색을 red로 변경
test1c.onclick = function () {
  test1c.style.backgroundColor = "red";
}
//.......... A few moments later.............
// test1c 요소가 클릭되었을 때 글자색을 "white"로 변경
test1c.onclick = function () {
  test1c.style.color = "white";
}
// -> onclick에 저장된 기존의 값이 덮어씌워지면서 이전 코드가 사라지는 문제가 발생
//------------------------------------------------------------------------------

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

// 표준 이벤트 모델 작성법
// 요소. addEventListener("이벤트종류", 이벤트핸들러(함수));
test2.addEventListener("click", function () {

  // 투명도 숫자 의미 : 1(불투명) -> 0(투명), 여기선 0.1씩 감소하는 것이 목표!

  // 현재 test2의 투명도 확인
  let curr = test2.style.opacity; // 투명도가 어느정도 인지 숫자로 표시

  // console.log(curr);   // JS에서 맨처음에는 투명도 '' -> 1대입

  if (curr == '') {
    test2.style.opacity = 1;
    curr = 1;
  }

  // 투명도를 0.1씩 감소시키기
  test2.style.opacity = curr - 0.1;

  if (test2.style.opacity == 0) {    // 완전히 투명해진 경우
    test2.style.opacity = 1;      // 다시 불투명하게 변경
  }
});

// test2 요소를 클릭하면 클릭 횟수를 카운트
let count = 0;
test2.addEventListener("click", function () {
  count++;        // 클릭할때마다 카운트 1 증가

  // 표준 이벤트 모델의 이벤트 핸들러(함수) 안에서 this == 이벤트가 발생한 요소!!!

  this.innerText = count;
});

// 코드쓰는게 생각이 안나면 과정을 글로 쓰고나서 코드작성!
// 1. 내가 입력할 input 태그 요소 얻어오기(추후 작성된 값도 얻어오기)
// 2. 얻어온 색상(내용)으로 배경색을 줄 div 요소 얻어오기
// 3. 'Enter'키가 누르고 올라왔을 때 색깔이 변경되기
// 3-1. (함수) input3에 작성된 값을 box3의 배경색에 대입하기
// 4. box3를 클릭했을 때 배경색을 알려주기

// 입력한 색상으로 배경색 변경하기
const input3 = document.querySelector("#input3");         // 1.
const box3 = document.querySelector("#box3");             // 2.

function bgColorChange(){                                 // 3-1.
  box3.style.backgroundColor = input3.value;
}

input3.addEventListener("keyup", function(e){             // 3.
  // console.log(e);
  // e : 이벤트 객체 (발생한 이벤트에 대한 정보를 담은 객체)
  if(e.key == "Enter"){
    bgColorChange();
  }
});

box3.addEventListener("click", function(e){                // 4.
  // console.log(e);
  // e.target : 이벤트가 발생한 대상요소
  
  // alert(`배경색 = ${input3.value}`);                 // 주의) ${}은 백틱(``)에서만 적용
  alert(`배경색 = ${e.target.style.backgroundColor}`);  // e.target을 이용하여 배경색을 나타내는 방법
});