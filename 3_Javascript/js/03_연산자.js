// 03_연산자.html의 id : input1, input2, calcResult
// 변수 선언 및 초기화
// document.getElementById("~~~")
// HTML 문서 내에서 아이디(~~~)가 일치하는 요소를 얻어옴
const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {       // input요소.value : input요소에 작성된 값 얻어오기
  const value1 = number1.value;
  const value2 = number2.value;

  // console.log("두 수의 합 :", value1+value2);

  // input 요소에 작성된 값은 무조건 문자열(string) 형태여서
  // 더했을 때 이어쓰기 되는 문제 발생(input type과 무관)

  // [해결방법] 문자열(string)을 숫자(number)로 변경하는 코드 수행
  // 숫자만 작성된 문자열("123" 등)을 숫자 타입으로 바꾸는 방법
  // -> Number("123");
  console.log("두 수의 합 :", Number(value1) + Number(value2) );

  // 두 수의 합을 아이디가 "calcResult"인 요소(result 변수)의 
  // 내부 글자(innerText)로 대입하기
  result.innerText = Number(value1) + Number(value2);
}

// 빼기 함수
function minusFn () {
  const value1 = Number(number1.value); // 이렇게 대입할 대 바로 숫자타입으로 바꿀 수 있음
  const value2 = Number(number2.value);
  console.log("두 수의 차 :", value1 - value2 );
  result.innerText = value1 - value2;
}

// 곱하기 함수
function multiFn () {
  const value1 = Number(number1.value);
  const value2 = Number(number2.value);
  console.log("두 수의 곱 :", value1 * value2 );
  result.innerText = value1 * value2; 
}

// 나누기 함수
function divFn () {
  const value1 = Number(number1.value);
  const value2 = Number(number2.value);
  console.log("두 수의 나누기 :", value1 / value2 );
  result.innerText = value1 / value2;
}

// mod 함수
function modFn () {
  const value1 = Number(number1.value);
  const value2 = Number(number2.value);
  console.log("두 수의 mod :", value1 % value2 );
  result.innerText = value1 % value2;
}

//------------------------------------------------------------------------------------------
// (응용) 입력받은 3개의 수 합계 출력하기, id = num1, num2, num3, total
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total");

function sumFn(){
  /* 이렇게 선언할 필요 없이 바로 total에 num1, num2, num3의 숫자값의 합을 대입하면 됨
  const value1 = Number(num1.value);
  const value2 = Number(num2.value);
  const value3 = Number(num3.value);
  console.log("세 수의 합 :", value1 + value2 + value3 );
  total.innerText = value1 + value2 + value3;
  */
  console.log("세 수의 합 :", Number(num1.value) + Number(num2.value) + Number(num3.value));
  total.innerText = Number(num1.value) + Number(num2.value) + Number(num3.value);
}

//-------------------------------------------------------------------------------------------
// 증가, 감소 연산자 (++, --) id = result2
// 증가, 감소할 수를 저장할 변수를 선언 및 초기화(값 0)
let count = 0;        // (주의) const로 선언하면 값을 증가/감소시킬 수 없음!!!!!

// 필요한 요소 얻어오기 : 문서 내에서 id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2 = document.getElementById("result2");

// 1 증가 함수
function increase() {         // count 변수의 값 1 증가
  count++;      // 또는 ++count;      -> 둘 다 count 값이 1 증가하는 의미임

  // 증가한 count 값을 result2의 내부 글자로 대입
  result2.innerText = count;
}

function decrease() {
  // 감소한 count 값을 result2의 내부 글자로 대입
  result2.innerText = --count;      // 1줄로 끝낼 땐 전위연산을 써야함 
}

//--------------------------------------------------------------------------------------------
// 전위, 후위 연산 확인하기
function check () {
  // 함수 밖, 안은 구분되는 공간임
  // 밖에 작성한 변수 count(전역변수)와 함수 안에 작성한 변수 count는 서로 다른 변수(동명이인)
  let count = 100;

  // 컴퓨터한테 연산은 산술연산(+-*/)뿐 아니라 코드를 하나하나 실행하는 것들이 전부 연산임!

  // 전위 연산 (++count 혹은 --count) 확인 : 다른 연산보다 먼저 수행
  console.log(++count);   // 101로 '증가'한 후 출력
  console.log(++count);   // 102로 '증가'한 후 출력
  console.log(++count);   // 103로 '증가'한 후 출력
  console.log(--count);   // 102로 '감소'한 후 출력
  console.log(--count);   // 101로 '감소'한 후 출력
  console.log(--count);   // 100로 '감소'한 후 출력

  // 후위 연산 (count++ 혹은 count--) 확인 : 다른 연산이 다 끝나고 마지막에 수행
  count = 50;
  console.log(count++);   // 50을 출력한 후, 51로 증가
  console.log(count);     // 51이 출력
  console.log(count--);   // 51을 출력한 후, 50로 감소
  console.log(count);     // 50이 출력

  let a = 10;
  let b = 5;
  let c = ++a * b--;

  // 최종적으로 a, b, c에 저장된 값은?
  // a == 11
  // b == 4
  // c == 55
  console.log(a,b,c);
};

//-----------------------------------------------------------------------
// 연습문제


function printJSObject(){
  const userName = document.getElementById("userName");     // input태그의 요소 자체
  const userAge = document.getElementById("userAge");       // 언제 선언하는 지에 따라 다름
  const userGender = document.getElementById("userGender"); // 기능 흐름파악을 위해 안쪽에 배치

  const userInfo = {
    이름 : userName.value,        // userName의 value를 대입
    나이 : userAge.value,         // string은 ""안써도 Key부분은 알아서 인식함
    성별 : userGender.value
  };
  console.log(userInfo);
}