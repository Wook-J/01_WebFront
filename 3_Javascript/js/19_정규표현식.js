// 정규표현식 객체 생성 및 확인하기
document.getElementById("btn1").addEventListener("click", () => {

  const regExp1 = new RegExp("script");       // 정규표현식 객체 생성
  // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

  const regExp2 = /java/;
  // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식

  // 확인하기
  const str1 = "저희는 지금 javascript를 공부하고 있습니다";
  const str2 = "jsp(java server page)도 나중에 할겁니다";
  const str3 = "java, java, java";

  console.log(regExp1.test(str1));
  console.log(regExp1.exec(str1));

  console.log(regExp2.test(str2));
  console.log(regExp2.exec(str2));

  console.log(regExp1.test(str3));
  console.log(regExp1.exec(str3));
});
// ---------------------------------------------------------------------------------------------
// 이름 유효성 검사 ----------------------------------------------
document.getElementById("inputName").addEventListener("keyup", (e) => {
  const inputNameResult = document.getElementById("inputNameResult");
  const regExp = /^[ㄱ-힣]{2,5}$/;          // 한글 2~5글자 정규표현식 객체 만들기

  // 빈칸인지 검사
  if (e.target.value.length == 0) {
    inputNameResult.innerText = "";
    return;
  }

  // 유효성 검사
  if (regExp.test(e.target.value)) {
    inputNameResult.innerText = "유효한 이름 형식입니다";
    inputNameResult.style.color = "green";
    inputNameResult.style.fontWeight = "bold";
  } else {
    inputNameResult.innerText = "유효하지 않은 이름 형식입니다";
    inputNameResult.style.color = "red";
    inputNameResult.style.fontWeight = "bold";
  }
});
// 주민등록번호 유효성 검사 -----------------------------------------
document.getElementById("inputPno").addEventListener("keyup", (e) => {
  const inputPnoResult = document.getElementById("inputPnoResult");
  if(e.target.value.length == 0){
    inputPnoResult.innerText = "주민등록번호를 작성해주세요";
    inputPnoResult.classList.remove("confirm");
    inputPnoResult.classList.remove("error");
    return;
  }

  // 정규표현식 패턴 : 생년원일(6글자) - 고유번호(7글자)
  const regExp = /^\d{6}\-\d{7}$/;       // 문자그대로 특수문자쓰고싶으면 \쓰고 써야함!(ex \* vs *)
  if(regExp.test(e.target.value)){
    inputPnoResult.innerText = "유효한 주민등록번호 형식입니다";
    inputPnoResult.classList.add("confirm");
    inputPnoResult.classList.remove("error");
  } else{
    inputPnoResult.innerText = "유효하지 않은 주민등록번호 형식입니다";
    inputPnoResult.classList.add("error");
    inputPnoResult.classList.remove("confirm");
  }

});