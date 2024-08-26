// break 확인
function check1() {

  for (let i = 1; i < 11; i++) {      // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    console.log("i :", i);
    if (i == 5) break;
  }
}

function check2() {
  let i = 1;

  while (true) {              // 원래 무한반복하는 while문
    console.log(i++);
    if (i > 10) break;        // 10 초과 시 멈춤
  }
}

// continue 확인
function check3() {                  // 1부터 20까지 1씩 증가하면서 출력
  for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) continue;        // 3의 배수이면 아래코드 수행하지 않고 다음 반복으로 넘어감
    console.log("i :", i);
  }
}

// 1부터 30까지 1씩 증가하며 출력, 단 홀수 또는 10의 배수는 건너뛰기
function check4() {
  for (let i = 1; i <= 30; i++) {
    if ((i % 2 == 1) || (i % 10 == 0)) continue;
    console.log("i :", i);
  }
}

// break, continue 둘 다 적용해보기
/* 0~9까지 5번 반복하여 출력
    단,  
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기


  최종적으로 아래처럼 출력되어야 함
 
  01235679
  01235679
  01235679
*/

function check5() {
  console.log("---------- check5 -----------");
  for (let y = 0; y < 5; y++) {
    if (y == 3) break;
    let str = `${y + 1}번째 : `;

    for (let x = 0; x < 10; x++) {
      if ((x != 0) && (x % 4 == 0)) continue;
      str += x;
    }
    console.log(str);
  }
}

// UP & DOWN GAME
function startGame() {
  const answer = Math.floor(Math.random() * 200) + 1;
  console.log(answer);
  let count = 0;
  let input = prompt(`1 ~ 200 사이에 값을 입력하세요.`);

  while (true) {

    if (input == null) {
      if (count == 0) {
        alert("포기...! 시도조차 하지않았군요!");
        break;

      } else {
        alert(`중도 포기...! 시도 횟수 ${count}회`);
        break;
      }
    }

    const inputNumber = Number(input);

    if (isNaN(inputNumber)) {             // isNaN() : 매개변수가 숫자가 아니면 ture
      alert("숫자 값이 입력되지 않았습니다");
      input = prompt(`1 ~ 200 사이에 숫자 값을 입력하세요. 시도 횟수 ${count}회`);
      continue;
    }

    if (inputNumber != Math.floor(inputNumber)) {     // 소수점이하 제출한 경우
      alert("정수가 아닌 수를 입력하였습니다.");
      input = prompt(`1 ~ 200 사이에 정수를 입력하세요. 시도 횟수 ${count}회`);
      continue;
    }

    if (inputNumber < 1 || inputNumber > 200) {       // 1~200 가 아닌 정수를 제출한 경우
      alert("1 ~ 200 사이의 정수가 입력되지 않았습니다");
      input = prompt(`1 ~ 200 사이에 자연수을 입력하세요. 시도 횟수 ${count}회`);
      continue;
    }

    count++;

    if (answer == inputNumber) {                            // 정답 = 입력한 수
      alert(`정답입니다. 시도 횟수 : ${count}`); break;
    } else {
      if (answer > inputNumber) {                           // 정답 > 입력한 수
        alert(`정답은 입력한 ${inputNumber}보다 큽니다`);
      } else {                                              // 정답 < 입력한 수
        alert(`정답은 입력한 ${inputNumber}보다 작습니다`);
      }
    }

    input = prompt(`1 ~ 200 사이에 값을 입력하세요. 시도 횟수 ${count}회`);

  }
}


// UP&DOWN GAME 강사님 풀이
function startGame2() {
  const answer = Math.floor(Math.random() * 200) + 1;
  console.log("정답 :", answer);
  let count = 0;                                          // 정답 시도 횟수 세기 위한 변수
  let str = "1부터 200 사이의 숫자를 입력하세요";           // prompt에 출력할 문자열

  while (true) {
    let input = prompt(str);                              // null 또는 입력한 값

    if (input === null) {                                 // 취소버튼 클릭 시
      alert("게임 포기");
      break;
    }

    const value = Number(input);                          // 입력 받은 값을 숫자로 변환

    // 잘못 입력한 경우
    // 1. 숫자가 아닌 글자를 넣은 경우 : NaN (Not a Number)를 활용
    // isNaN(값) : 값이 NaN이면 true, 
    // 2. 범위를 초과한 경우

    if (isNaN(value)) {                                    // 숫자가 아닌 값을 입력한 경우
      alert("숫자만 입력해 주세요");
      continue;
    }

    if (value < 1 || value > 200) {                        // 범위를 초과한 경우
      alert("1부터 200 사이 값만 작성해주세요");
      continue;
    }

    count++;                                               // 정답을 맞추기 위한 시도를 했음!

    if (value === answer) {
      alert(`정답!!! (${answer}) / 시도 횟수 : ${count}회`);
      break;
    }

    if(value < answer ){
      str = `${value}[UP] / 시도 횟수 : ${count}회`;
    } else{
      str = `${value}[DOWN] / 시도 횟수 : ${count}회`;
    }
  }
}