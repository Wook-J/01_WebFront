// 유사배열이란?
// 배열처럼 index, length를 가지고 있으나 배열전용 기능(메서드)을 제공하지 않음
// * 배열전용 기능 예시 : pop(), push(), map(), filter(), ...

// class를 이용한 요소 접근하기
function classTest() {
  const divs = document.getElementsByClassName("cls-test");

  console.log(divs);          // -> HTMLCollection (== 유사배열), 동적으로만 움직임, forEach 사용 불가능

  divs[0].style.backgroundColor = "rgb(114, 203, 80)";
  divs[1].style.backgroundColor = "blue";
  divs[2].style.backgroundColor = "deepPink";
}

// 태그명으로 요소 접근하기
function tagNameTest() {      // HTML 문서에 존재하는 모든 li 태그 요소를 얻어와 배열로 묶어서 반환
  const tagList = document.getElementsByTagName("li");

  console.log(tagList);       // -> HTMLCollection (== 유사배열)

  for (let i = 0; i < tagList.length; i++) {

    // tagList[i].innerText              : 작성된 내용을 얻어오기
    // tagList[i].innerText = "abc";     : 내용으로 "abc"를 대입하기

    console.log(tagList[i].innerText);

    tagList[i].style.backgroundColor = tagList[i].innerText;
  }
}

// name으로 요소 접근하기
function nameTest() {
  const hobbyList = document.getElementsByName("hobby");

  console.log(hobbyList);     // -> NodeList (== 유사배열), 정적/동적, forEach 사용 가능

  let str = "";               // 체크된 값 누적
  let count = 0;              // 체크된 수 카운트

  for (let i = 0; i < hobbyList.length; i++) {
    // checkbox, radio 전용 속성(.checked)
    // input요소.checked                :  요소가 체크되어 있으면 true, 아니면 false 반환
    // input오소.checked = ture/false;  : '해당 요소를 체크/체크해제 하겠다'는 의미(대입 가능)

    if (hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++;
    }
  }

  // id가 name-div인 요소에 내용으로 결과 출력
  document.getElementById("name-div").innerHTML = `${str} <br><br> 선택된 취미 개수 : ${count}개`;
}

// CSS 선택자로 요소 접근하기
function cssTest() {
  // [요소 1개]
  // 1) document.querySelector("CSS 선택자");    -> 선택자가 선택한 요소 중 첫번째 요소를 반환

  // [요소 n개 -> 배열]
  // 2) document.querySelectorAll("CSS 선택자"); -> 선택한 요소 모두를 배열(유사배열)형태로 반환

  // target-div 속성 값이 "css-div"인 요소에 접근
  const container = document.querySelector('[target-div = "css-div"]');

  // 요소의 테두리를 변경
  container.style.border = "10px solid red";

  // 첫 번째 자식 div 접근해서 내용을 "CSS 선택자로 선택해서 값 변경됨" 넣기
  const div1 = document.querySelector('[target-div = "css-div"] > div'); // 첫번째 자식은 바로 선택가능
  div1.innerText = "CSS 선택자로 선택해서 값 변경됨";

  // 두 번째 자식 div 접근해서 내용을 "CSS 선택자로 선택해서 값 변경됨" 넣기
  const div2 = document.querySelector('[target-div = "css-div"] > div:last-child');
  div2.innerText = "첫 번째 요소가 아니면 querySelector() 특징 활용 못함";

  // 모든 자식 div를 한번에 선택(배열)
  const divList = document.querySelectorAll('[target-div = "css-div"] > div');

  // index를 이용해서 요소 하나씩 접근해보기
  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "20px";

  for (let i = 0; i < divList.length; i++) {
    divList[i].onclick = function () {
      alert(`${i}번째 요소입니다!`);
    }
  }
}

// 카카오톡 채팅 화면 만들기
function readValue() {
  // 채팅이 출력되는 배경요소 얻어오기
  const bg = document.querySelector("#chatting-bg");    // 선택하는 방법은 다양!
  
  // 채팅 내용 입력 input 요소 얻어오기
  const input = document.querySelector("#user-input");

  // 입력된 값이 없을 경우
  // 1) 진짜 안 적음
  // 2) 공백만 적음

  // 문자열.trim() : 문자열에 있는 좌우 공백 제거, 문자 사이의 공백은 사라지지 않음
  if(input.value.trim().length == 0 ){
    alert("채팅 내용을 입력해주세요");
    input.value = "";                       // 이전 input에 작성된 공백 삭제하기
    input.focus();                          // input에 커서 활성화
    return;                                 // 현재 수행중인 함수 종료 + 호출한 곳으로 돌아감
  }

  // 채팅 출력
  bg.innerHTML += `<p><span>${input.value}</span></p>`;

  bg.scrollTop = bg.scrollHeight;
  // bg.scrollTop : 현재 스크롤의 위치(스크롤이 현재 얼마만큼 내려와 있는지를 나타냄)
  // bg.scrollTop = 값 : 스크롤 윗부분을 값의 위치로 이동
  // bg.scrollHeight : bg의 스크롤 전체 높이(스크롤바를 이용해 스크롤할 수 있는 전체 높이)

  input.value = "";
  input.focus();
}

// id가 user-input인 input요소에서 키가 올라오는 동작이 발생했을 때(감지되었을 때)
// 올라온 키가 "Enter"키 이면 readValue()를 호출

// keyup : 눌러지던 키가 떼어졌을 때(올라왔을 때) (1회만 인식)
// keydown : 키가 눌러졌을 때( + 꾹 누르고 있으면 계속 인식됨)
document.querySelector("#user-input").addEventListener("keyup", function (e){

  // e : 이벤트 객체 (발생한 이벤트 정보를 담고 있는 객체)
  // console.log(e);

  if(e.key == "Enter"){     // 엔터가 눌러졌을 때
    readValue();
  }

});