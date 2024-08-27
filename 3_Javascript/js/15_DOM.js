// Node 확인하기-----------------------------------------------------------------
document.querySelector("#btn1").addEventListener("click", () => {       // 익명함수를 화살표 함수로 표현
  const test = document.querySelector("#test");     // ul 태그
  console.log(test);

  // test의 모든 자식 노드 얻어오기
  const list = test.childNodes;
  console.log(list);        // NodeList -> 유사배열

  // 자식 노드 중 첫번째 li 요소
  const li1 = list[3];
  console.log(li1);

  // 1. 부모노드 찾기(요소.parentNode) -> ex) li1의 부모노드 배경색 변경
  li1.parentNode.style.backgroundColor = "skyblue";   // li1의 부모노드는 ul태그(id="test")임!

  // 2. 첫 번째 자식노드 찾기(요소.firstChild)
  console.log(test.firstChild);         // #test(ul)의 첫 번째 자식노드 찾기

  // 3. 마지막 자식노드 찾기(요소.lastChild)
  console.log(test.lastChild);          // #test(ul)의 마지막 자식노드 찾기

  // 4. 원하는 위치(index)에 존재하는 자식노드 찾기(요소.childNodes[index])
  // #test의 자식노드 중 3번째 li 태그를 찾아서 배경색 pink로 지정
  test.childNodes[9].style.backgroundColor = "pink";

  // 5. 이전/다음 형제노드 찾기        (+) 탐색용 코드는 연달아서 작성 가능!
  // (이전 형제노드 : 요소.previousSibling)
  // (다음 형제노드 : 요소.nextSibling)
  console.log(test.childNodes[9].nextSibling.nextSibling);      // == test.childNodes[11]

  // #test의 마지막 자식 노드의 이전 형제노드 선택
  console.log(test.lastChild.previousSibling);

  // 노드 추가--------------------------------------------------------------------
  // 1. 마지막 자식 노드로 추가(appendChild(노드))
  // -> list[11]의 마지막 자식으로 "ZZZ" 라는 TextNode 추가
  list[11].appendChild(document.createTextNode("ZZZ"));

  // 2. 마지막 자식으로 추가(append("내용" 또는 노드 또는 요소 여러개))
  list[11].append("12345", "abcd", "가나다라");

  // 3. 첫 번째 자식으로 추가(prepend("내용" 또는 노드 또는 요소 여러개))
  list[11].prepend("오늘 ", "점심 ", "뭐먹지?");

  // 4. 이전/다음 형제로 추가(before/after("내용" 또는 노드 또는 요소))
  // #test 전/후에 내용 추가
  test.before("이전입니다");
  test.after("이후입니다");
});
//--------------------------------------------------------------------------------------------------
// Node와 Elment의 차이
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  const test2 = document.querySelector("#test2");     // #test2 얻어오기(ul태그)

  console.log(test2.children);    // #test2의 모든 자식 요소(Element)   cf) Node와 다름(하위요소임)
  console.log(test2.firstElementChild); // #test2의 첫 번째 자식 요소 선택
  console.log(test2.lastElementChild); // #test2의 마지막 자식 요소 선택
  console.log(test2.parentElement);  // #test의 부모 요소  -> ul태그를 감싸고 있는 body 태그 나옴!
  console.log(test2.previousElementSibling);  // #test의 이전 형제 요소  -> ul 태그 이전 형제인 pre 태그
  console.log(test2.nextElementSibling);  // #test의 다음 형제 요소  -> ul 태그 다음 형제인 button 태그
});