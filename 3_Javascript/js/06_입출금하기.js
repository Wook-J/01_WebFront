function test() {
  const password = prompt("비밀번호를 입력하세요");
  // 확인 -> 입력한 문자열로 반환
  // 취소 -> null로 반환
  console.log(password);

  if (password == null) {   // 취소버튼 누른경우
    alert("취소");

  } else {                // 확인버튼 누른경우
    if (password == '1234') {
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치");
    }
  }
}

// 입출금하기

const amount = document.getElementById("amount");   // 금액 작성 input
const output = document.getElementById("output");   // 잔액 출력 span
let balance = 10000;                                // 잔액기록 변수(초기값 10000)
const password = '1234';                            // 비밀번호 저장변수, 문자열 형태

output.innerText = balance;                         // 초기금액 설정

function deposit() {
  const input = Number(amount.value);               // 입금할 금액

  if (amount.value.length == 0) {                   // 1-1 금액을 입력하지 않은 경우
    alert("입글할 금액을 입력하세요");
  } else if (input < 0) {                              // 1-2 금액을 음수로 입력한 경우
    alert("양수를 입력하세요");
  }
  else {                                            // 1-3 금액을 양수로 입력한 경우
    balance += input;                                 // 잔액에 input을 더하기
    output.innerText = balance;                       // 잔액을 출력하기
    amount.value = '';                                 // input에 기존에 작성된 값 제거하기(추가된 내용)
  }
}

function withdrawal() {
  const input = Number(amount.value);               // 출금할 금액

  if (amount.value.length == 0) {                   // 1-1 금액을 입력하지 않은 경우
    alert("출금할 금액을 입력하세요");
  } else {                                          // 1-2 금액을 입력한 경우
    if (input < 0) {                                // 1-2-1 금액을 음수로 입력한 경우
      alert("양수를 입력하세요");
    }
    else {                                          // 1-2-2 금액을 양수로 입력한 경우
      const pw = prompt("비밀번호를 입력하세요");        // 2 출금할 때 필요한 비밀번호 작성

      if (pw == null) {                                  // 3-1 취소버튼 누른 경우
        alert("출금을 취소하였습니다");

      } else if (pw != password) {                       // 3-2 비밀번호를 제대로 작성하지 않은 경우
        alert("비밀번호가 일치하지 않습니다.");

      } else {                                           // 3-3 비밀번호를 제대로 작성한 경우
        if (input > balance) {                              // 4-1 출금 금액이 잔액보다 큰 경우
          alert("출금 금액이 잔액보다 클 수 없습니다");

        } else {                                            // 4-2 출금 금액이 잔액보다 같거나 작은 경우
          balance -= input;
          alert(`${input}원이 출금되었습니다. 남은 잔액 ${balance}원`);
          output.innerText = balance;
          amount.value = '';                                 // input에 기존에 작성된 값 제거하기(추가된 내용)
        }
      }
    }
  }
}