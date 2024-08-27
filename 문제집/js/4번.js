document.getElementById("btn").addEventListener("click", () => {
  if (document.getElementById("numberInput").value.length == 0) {             // 글자 입력 시
    alert("숫자를 입력하세요");
    document.getElementById("numberInput").value = "";
    document.getElementById("numberInput").focus();
    return;
  }

  const numberInput = Number(document.getElementById("numberInput").value);   // 숫자값 읽기

  if (Math.floor(numberInput) !== numberInput) {                              // 소수 입력 시
    alert("정수를 입력하세요");
    document.getElementById("numberInput").value = "";
    document.getElementById("numberInput").focus();
    return;
  }

  if (numberInput <= 0) {                                                     // 음수 입력 시
    alert("0보다 큰 정수를 입력하세요");
    document.getElementById("numberInput").value = "";
    document.getElementById("numberInput").focus();
    return;
  }

  let evenOrOdd = "";                                                         // 짝홀 구분할 문자

  if (numberInput % 2 == 0) evenOrOdd = `${numberInput}은 짝수입니다.`;
  else evenOrOdd = `${numberInput}은 홀수입니다.`;

  setTimeout(() => { alert(`${evenOrOdd}`); }, 3000);                         // 3초 후 알람창
});