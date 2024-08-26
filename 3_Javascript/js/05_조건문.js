// 양수인지 검사
const input1 = document.getElementById("input1");
function check1() {
  const value = Number(input1.value);     // 입력받은 값, Number()를 통해 문자열을 숫자형태로 형변환

  if (value > 0) { alert("입력받은 수는 양수입니다."); }         // 단일 if 문
  if (value <= 0) { alert("입력받은 수는 양수가 아닙니다."); }    // 단일 if 문
}

// 0~100 사이 난수 발생시켜 홀/짝 판별하기
function check2() {
  // Math.random() : 난수 발생/ 기본범위(0이상 ~ 1 미만의 소수)
  // Math.floor() : 소수점 내림하여 정수로 만듦

  // 0 ~ 100 사이 난수
  const randomNumber = Math.floor(Math.random() * 101);
  if (randomNumber % 2 == 1) {                                    // if - else 문
    alert(`발생한 난수는 ${randomNumber}이고, 홀수입니다.`);
  } else {
    alert(`발생한 난수는 ${randomNumber}이고, 짝수입니다.`);
  }
}

// -3 ~ 3 사이 난수 발생시켜 음수, 0, 양수 판별하기
function check3() {
  const randomNumber = Math.floor(Math.random() * 7) - 3;
  let message = "생성된 난수는 " + randomNumber + "이고, ";

  if (randomNumber == 0) {                             // 주의 코딩에서 equal은 '='이 아니고 '=='임!!!
    message += "0 입니다.";
  } else if (randomNumber > 0) {
    message += "양수 입니다.";
  } else {
    message += "음수 입니다.";
  }

  alert(message);
}

// 어린이, 청소년, 성인 구분하기
const inputAge = document.getElementById("inputAge");

function check4() {
  const age = Number(inputAge.value);
  let message = "사용자는 ";

  // console.log(inputAge.value.length);    // "문자열".length : 문자열의 길이를 반환
  // console.log(age);                      // Number()로 형변환하면 미입력 상태도 0으로 바뀜

  if (inputAge.value.length == 0) {      // 입력을 안한 경우
    message = "값을 입력해주세요"
  } else {                               // 입력을 한 경우
    if ((age < 0) || (age > 150)) {          // 컴퓨터가 일을 덜 하게 하려면 0미만 또는 150세 초과 먼저!
      message = "잘못 입력하셨습니다.";
    } else if ((0 <= age) && (age < 14)) {   // 앞선 if에서 false일 경우 앞선 범위 제외됨!!(0세 ~ 150세 사이)
      message += "어린이입니다.";             // 0세 ~ 13세
    } else if (age < 20) {                   // 앞선 if, else if에서 false일 경우 앞선 범위는 제외됨!!
      message += "청소년입니다.";             // 14세 ~ 20세
    } else {                                 // 앞선 if, else if에서 false일 경우 앞선 범위는 제외됨!!
      message += "성인입니다.";               // 21세 ~ 150세
    }
  }

  alert(message);
}

// switch문을 이용한 계산기
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const calcResult = document.getElementById("calcResult");

function calc(op) {
  // 매개변수(Parameter) : 함수 호출 시 전달받은 값을 저장하는 변수
  // ex) calc('+') : '+' 값이 op 변수에 저장됨

  // console.log(op);   // op에 어떤 변수가 저장되어있는지 console에서 확인하기

  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  let result;   // 계산 결과 저장 변수 선언

  // break : switch문을 멈춤
  // -> case에 break;를 작성하지 않으면 멈추지 않고 다음 case로 넘어감


  switch (op) {
    case '+': result = v1 + v2; break;
    case '-': result = v1 - v2; break;
    case '*': result = v1 * v2; break;
    case '/': result = v1 / v2; break;
    // result =  `몫 : ${Math.floor(v1/v2)}, 나머지 : ${v1 - v2*Math.floor(v1/v2)}`;  // 몫과 나머지로 나타내기
    case '%': result = v1 % v2; break;

    // 맞는 case가 없을 경우에 적용할 기본값,   default문 자체도 생략가능!!!
    default: result = "잘못된 연산자"; break;   // default문에는 break 생략 가능!!!
  }
  calcResult.innerText = result;


  /* if문으로 구현하기
  if (op == '+') { result = v1 + v2; }
  else if (op == '-') { result = v1 - v2; }
  else if (op == '*') { result = v1 * v2; }
  else if (op == '/') { result = v1 / v2; }
  else if (op == '%') { result = v1 % v2; }
  else { result = "잘못된 연산자"; }

  calcResult.innerText = result;
  */
}
//---------------------------------------------------------------------------------------------------