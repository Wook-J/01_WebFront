// for문 연습
for (let num = 1; num <= 5; num++) {
  console.log(`통과!!`);       // 조건식이 true인 경우 반복 수행할 코드
}

// 확인 1
function check1() {
  let result = "";
  for (let num = 1; num <= 5; num++) { result += num; }
  console.log(result);
}

// 확인 2
function check2() {
  for (let num = 1; num <= 10; num++) { console.log(num); }
}

// 확인 3
function check3() {
  console.log("-------- 확인 3 --------");
  for (let num = 1; num <= 20; num++) { console.log("num :", num); }
}

// 확인 4
function check4() {
  console.log("-------- 확인 4 --------");
  for (let num = 5; num <= 15; num++) { console.log(num); }
}

// 확인 5
function check5() {
  console.log("-------- 확인 5 --------");
  for (let num = 1; num <= 30; num += 2) { console.log(num); }
}

// 확인 6
function check6() {
  console.log("-------- 확인 6 --------");
  let sum = 0;
  for (let num = 1; num <= 10; num++) { sum += num; }
  console.log("sum :", sum);
}
//-----------------------------------------------------------------------------------------
// 입력 받은 범위 내 모든 정수의 합 구하기
function sumFn() {
  const start = Number(document.getElementById("inputNumber1-1").value);
  const end = Number(document.getElementById("inputNumber1-2").value);
  const result1 = document.getElementById("result1");
  let sum = 0;

  for (let num = start; num <= end; num++) {
    sum += num;
  }

  result1.innerText = sum;
}

// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
function executeFn2() {
  const start = Number(document.getElementById("inputNumber2-1").value);
  const end = Number(document.getElementById("inputNumber2-2").value);
  const val = Number(document.getElementById("inputNumber2-3").value);

  const result2 = document.getElementById("result2");   // 결과 출력할 ul요소, ul태그의 id를 가져옴
  result2.innerHTML = "";

  for (let num = start; num <= end; num += val) {
    result2.innerHTML += `<li>${num}</li>`;
  }

}
// 요소.innerText += `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 누적해서 대입 (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML += `<li>${num}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력


// 입력 받은 단(2~9) 출력하기
function executeFn3() {
  const input3 = Number(document.getElementById("input3").value);
  const result3 = document.getElementById("result3");
  result3.innerHTML = "";

  if (input3 - Math.floor(input3) != 0) {
    alert("정수를 입력하세요");
    return;
  }

  if (input3 < 2 || input3 > 9) {
    alert("2에서 9 사이의 수를 입력하세요");
    return;       // 함수를 종료하고 호출한 곳으로 돌아감
  }

  for (let num = 1; num <= 9; num++) {
    result3.innerHTML += `<li> ${input3} x ${num} = ${input3 * num}</li>`;
  }
}

// 중첩 for문 진행과정 체크해보기
for (let y = 1; y <= 3; y++) {
  console.log(`바깥쪽 for문 - 반복 ${y}`);

  for (let x = 1; x <= 2; x++) {
    console.log(`안쪽 for문 - 반복 ${x}`);
  }
}

// 중첩 for문 이용하여 아래 모양 만들기
// 12345
// 12345
// 12345
// 12345
function check8() {
  for (let y = 1; y <= 4; y++) {
    let str = `y=${y}번째 `;

    for (let x = 1; x <= 5; x++) {
      str += x;
    }
    console.log(str);
  }
}

// 중첩 for문 이용하여 아래 모양 만들기
// 1
// 12
// 123
// 1234
// 12345
function check9() {
  for (let y = 1; y <= 5; y++) {
    let str = "";

    for (let x = 1; x <= y; x++) {
      str += x;
    }
    console.log(str);
  }
}

// while문 확인하기
function check16() {
  let val;      // undefined

  // !=, == : 느슨한 비교
  // !==, === : 엄격한 비교
  // 기억하면 나중에 쓸 일이 있음(타입을 중요하게 생각하는 경향)

  while (val !== null) {
    // != 는 비교 연산자 : 값을 비교

    // 동일 비교 연산자
    // !== : 값과 자료형이 모두 다른 경우만 true, 다르면 계속 실행되는 것임(헷갈리므로 주의), 같으면 빠져나옴!
    // === : 값과 자료형이 모두 같은 경우만 true

    val = prompt("입력 후 확인");   // 변수에 prompt 값 대입
    // 확인 -> 입력한 값 대입
    // 취소 -> null 값 대입
  }
}

// 메뉴 주문하기
function check17() {

  // 메뉴가격 변수
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;

  // 주문 개수 카운트 변수
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  // prompt로 입력한 값을 저장할 변수
  let input;    // undefined

  // prompt에 입력하고 확인/취소 버튼 누른 경우
  // 확인 -> 입력한 값이 저장됨    // 취소 -> null이 저장됨

  while (input !== null) {        // 취소 버튼 누르기 전까지 무한 반복
    input = prompt("메뉴 번호를 입력하세요!");          // 숫자 대입해도 문자열로 인식

    switch (input) {
      case "1": gCount++; break;
      case "2": rCount++; break;
      case "3": dCount++; break;
      case null: alert("주문 완료!"); break;
      default: alert("메뉴에 작성된 번호만 선택해주세요!"); break;
    }
  }

  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);

  let sum = gCount * gimbap + rCount * ramen + dCount * donkkaseu;
  alert(`총 가격은 ${sum}원 입니다.`);
}

// while을 for문 처럼 사용하기
function check18() {          // 1부터 10까지 1씩 증가하며 출력
  let num = 1;
  while (num < 11) {
    console.log(num);
    num++;
  }
  console.log("------------------------------");

  let num2 = 10;
  while (num2 > 0) {
    console.log(num2);
    num2--;
  }
}