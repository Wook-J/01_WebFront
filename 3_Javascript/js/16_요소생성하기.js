// createElement사용하여 박스 생성하기
const createBox = document.querySelector("#createBox");
const container = document.querySelector(".container");

// createBox 버튼 클릭 시 div.box를 생성하여 conatiner에 마지막 자식으로 추가
createBox.addEventListener("click", () => {
  const box = document.createElement("div");      // 1. <div></div>가 생성되어 둥둥 떠있는 상태
  box.classList.add("box");                       // 2. <div class="box"></div>
  container.append(box);                          // 3. container의 마지막 자식으로 div 요소 추가

  const input = document.createElement("input");  // 4. <input>이 생성되어 둥둥 떠있는 상태
  input.type = "text";                            // 5. <input type="text">
  box.append(input);                              // 6. 생성된 inpput을 box의 마지막 자식으로 추가

  container.scrollTop = container.scrollHeight;   // (+) 스크롤의 윗부분을 스크롤 전체위치부분으로 이동..?
});

// console.log(container.classList);
/*
  요소.classList : 요소의 클래스 목록을 배열 형식으로 반환
  -> 클래스 존재여부, 추가, 제거 등을 할 수 있음

  * 요소.classList.contains("클래스명");      (+) contains는 함수명이라 뒤에 소괄호 추가
  -> 클래스가 있으면 true, 없으면 false를 반환

  * 요소.classList.add("클래스명");           (+) add는 함수명이라 뒤에 소괄호 추가
  -> 해당 요소에 클래스 추가

  * 요소.classList.remove("클래스명");        (+) remove는 함수명이라 뒤에 소괄호 추가
*/
//---------------------------------------------------------------------------------------------------------------
// innerHTML로 요소 추가                (+) 권장되는 방법은 아님!
const innerHTMLBox = document.querySelector("#innerHTMLBox");
innerHTMLBox.addEventListener("click", () => {
  container.innerHTML += "<div class='box'><input type='text'></div>";
});