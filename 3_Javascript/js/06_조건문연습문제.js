// 문제1 
const result1 = document.getElementById("result1");

function compare1() {
  let a = 5;
  let b = 10;

  if (a > b) {
    result1.innerText = `큰 숫자 : a(=${a})`;
  } else if (a < b) {
    result1.innerText = `큰 숫자 : b(=${b})`;
  } else {
    result1.innerText = `a(=${a})와 b(=${b})가 같다`
  }
}


// 문제2
const result2 = document.getElementById("result2");

function compare2() {
  let n = 6;

  if (n % 2 == 0) { result2.innerText = `n(=${n})은 짝수입니다`; }
  else { result2.innerText = `n(=${n})은 홀수입니다.`; }
}


// 문제3
const result3 = document.getElementById("result3");

function compare3() {
  let x = 15;
  let y = 22;
  let z = 9;

  // 최대값을 저장해둘 변수를 만들기(max)
  let max = x;    // x값을 일단 가장 큰 값으로 저장

  if (y > max) { max = y; }
  if (z > max) { max = z; }

  result3.innerText = `가장 큰 수는 ${max}입니다.`;
}

// 문제4
const input4 = document.getElementById("input4");
const result4 = document.getElementById("result4")

function compare4() {
  const v = input4.value;

  if (v.length == 0) { result4.innerText = `미입력하였습니다...`; }
  else if (v == 'apple') { result4.innerText = `입력받은 문자열은 apple입니다.`; }
  else if (v == 'banana') { result4.innerText = `입력받은 문자열은 banana입니다.`; }
  else { result4.innerText = `다른 문자열 입니다.`; }
}

// 문제5
const input5 = document.getElementById("input5");
const result5 = document.getElementById("result5")

function compare5() {
  const score = Number(input5.value);

  if (score <= 60) { result5.innerText = "F"; }
  else if (score <= 70) { result5.innerText = "D"; }
  else if (score <= 80) { result5.innerText = "C"; }
  else if (score <= 90) { result5.innerText = "B"; }
  else { result5.innerText = "A"; }
}

// 문제6
const age = document.getElementById("age");
const height = document.getElementById("height");
const result6 = document.getElementById("result6");

function compare6() {
  const v_age = Number(age.value);
  const v_height = Number(height.value);

  // 결과 저장용변수로 let result; 선언하고 if 조건문 결과에 따라 result에 대입해도 가능

  if (v_age < 0 || v_age > 100) {
    result6.innerText = "잘못 입력 하셨습니다.";
  }
  else {
    if (v_age < 12) {
      result6.innerText = "적정 연령이 아닙니다."
    }
    else {
      if (v_height < 140.0) { result6.innerText = "적정 키가 아닙니다."; }
      else { result6.innerText = "탑승가능"; }
    }
  }
}

// 문제7
const month = document.getElementById("month");
const temp = document.getElementById("temp");
const result7 = document.getElementById("result7");

// 이렇게 전역변수 대신 function 안에 const month = Number(document.getElementById("month").value); 도 가능!!

function compare7() {
  const v_month = Number(month.value);
  const v_temp = Number(temp.value);
  // let season;        // 이렇게 결과변수를 정의해주는 것이 좋음
  // let temperature;   // 몇도인지 저장할 변수

  if (6 <= v_month && v_month <= 8) {
    if (temp.value.length == 0) {
      alert('여름 온도를 입력하세요');
    } else {
      result7.innerText = `${v_month}월은 여름입니다.`;
      if (v_temp >= 30) {
        result7.innerText = `${v_month}월은 여름이고, 폭염(30도 이상)입니다.`;
      }
    }
  } else if (v_month == 12 || v_month == 1 || v_month == 2) {
    if (temp.value.length == 0) {
      alert('겨울 온도를 입력하세요');
    } else {
      result7.innerText = `${v_month}월은 겨울입니다.`;
      if (v_temp <= 0) {
        result7.innerText = `${v_month}월은 겨울이고, 한파(0도 이하)입니다.`;
      }
    }
  } else if (3 <= v_month && v_month <= 5) {
    result7.innerText = `${v_month}월은 봄입니다.`;
  }
  else { result7.innerText = `${v_month}월은 가을입니다.`; }

}


// 문제7 선생님 풀이
function compare8() {
  const month = Number(document.getElementById("month").value);
  const temp = Number(document.getElementById("temp").value);
  let season;
  let temperature;

  if (month == 3 || month == 4 || month == 5) { season = "봄"; }
  else if (month == 6 || month == 7 || month == 8) {
    season = "여름";
    temperature = Number(temp.value);
    if (temperature >= 30) { season = `${season} [온도 : ${temperature}도, 폭염!!]` }
  }
  else if (month == 9 || month == 10 || month == 11) { season = "가을"; }
  else if (month == 12 || month == 1 || month == 2) {
    season = "겨울";
    temperature = Number(temp.value);
    if (temperature <= 0) { season = `${season} [온도 : ${temperature}도, 한파!!]` }
  }
  else { season = "잘못된 달을 입력하셨어요!" }

  result7.innerText = season;
}