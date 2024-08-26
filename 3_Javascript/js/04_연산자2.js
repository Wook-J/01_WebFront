// 두 수가 같은지 비교       // id = compareValue1, compareValue2, btn1, result1
const cv1 = document.getElementById("compareValue1");     // input 요소1
const cv2 = document.getElementById("compareValue2");     // input 요소2
const result1 = document.getElementById("result1");       // span 요소

function compareFn1() {
  const v1 = cv1.value;
  const v2 = cv2.value;

  console.log(v1 == v2);              // console창에 표시
  result1.innerText = (v1 == v2);     // HTML 상에 표시
  // result1.innerText = (v1 != v2);  // 같지 않을 때 true 반환, 같을 때 false 반환
}
//----------------------------------------------------------------------------------
// (좌변 > 우변) 또는 (좌변 < 우변) 확인하기
const cv3 = document.getElementById("compareValue3");
const cv4 = document.getElementById("compareValue4");
const result2 = document.getElementById("result2");

function compareFn2() {           // 문자열에서는 uni코드 넘버로 비교함("0"은 48,"1"은 49)
  const v3 = Number(cv3.value);   // 문자열 -> 숫자로 형변환이 필요함!!!!
  const v4 = Number(cv4.value);
  console.log(v3> v4);
  result2.innerText = (v3 > v4);

  console.log("apple" > "banana");  // "a"는 uni코드 넘버 97, "b"는 unicode 넘버 98
}
//----------------------------------------------------------------------------------
// 배수 확인,    id = input3_1, input3_2, result3
const input3_1 = document.getElementById("input3_1");
const input3_2 = document.getElementById("input3_2");
const result3 = document.getElementById("result3");

function checkFn3() {
  const v1 = Number(input3_1.value);
  const v2 = Number(input3_2.value);

  // A가 B의 배수 == A를 B로 나눴을 때 나머지가 0
  // console.log( v1%v2 == 0);
  // result3.innerText = v1 + "은/는 " + v2 + "의 배수 : " + (v1%v2 == 0);  // 헷갈림

  // 백틱(`)을 이용한 문자열 작성하기!!!!!!(유용함)
  // - 문자열 전체를 백틱(``)으로 감싼 후 변수, 연산결과 등이 출력되는 자리에 ${변수명} 또는 ${연산식}을 작성
  // cf) 작은따옴표('')가 아님!!!!!!!!
  result3.innerText = `${v1}은/는 ${v2}의 배수 : ${v1%v2 == 0}`;
}
//-----------------------------------------------------------------------------------
// 입력된 값 만큼 누적/차감하기
let count4 = 0;                                         // 전역변수, 어디에 선언하고 초기화 하는지에 따라 변화가 달라짐
const input4 = document.getElementById("input4");       // 전역변수
const result4 = document.getElementById("result4");     // 전역변수

function minus4() {     // 차감
  const value = Number(input4.value);     // count4를 여기서 선언 및 초기화하면 누적이 안되고 계속 초기화됨
  count4 -= value;     // count4 = count4 - value;
  result4.innerText = count4;
}

function plus4() {      // 누적
  const value = Number(input4.value);
  count4 += value;     // count4 = count4 + value;
  result4.innerText = count4;
}
//-------------------------------------------------------------------------------------
// 논리 연산자 확인하기
function checkFn5() {

  // AND (&&) 연산자
  const bool1 = (104>=100) && (104%2==0);     // ex1)
  console.log( `104는 100 이상의 수 이면서 짝수인가? ${bool1}`);

  const bool2 = (50<=70) && (50%4==0);        // ex2)
  console.log(`50은 70 이하이고, 4의 배수인가? ${bool2}`);

  const bool3 = (13>=1) && (13<=10);            // ex3)
  console.log(`13은 1 부터 10 사이의 수가 맞는가? ${bool3}`);

  // OR (||) 연산자
  const bool4 = (4>10) || (4%2==0);
  console.log(`4는 10을 초과 하거나, 짝수인가? ${bool4}`);

  const bool5 = (50<=0) || (50>=40);
  console.log(`50은 0 이하 또는 40 이상인가? ${bool5}`);

  // NOT(!) 연산자
  console.log(`!true = ${!true}`);
  console.log(`!false = ${!false}`);

  const bool6 = false;
  console.log( !(bool6 != true) ); // false
}
//---------------------------------------------------------------------------------------
// 삼항 연산자 ( 조건식? true인 경우 : false인 경우 ),     id = inputId, inputPw
const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login() {    
  const id = document.getElementById("inputId").value;  // ID, PW input에 작성된 값 얻어오기
  const pw = document.getElementById("inputPw").value;

  const success = "로그인 성공!";
  const fail = "아이디 또는 비밀번호가 일치하지 않습니다";

  const message = ((id == "member01") && (pw == "pass01!")) ? success : fail;
  alert(message);
}