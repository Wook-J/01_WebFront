function solution(number) {
  let arr = number.split('');
  let answer = 0;
  arr.forEach((e) => {
    answer += Number(e);
  });
  return answer % 9;
}

// split 코드 줄이는 방법
function solution(number) {
  let answer = 0;
  number.split('').forEach(e => answer += Number(e));
  return answer % 9;
}

// 스프레드 사용하는 경우
function solution(number) {
  let arr = [...number];
  let answer = 0;
  arr.forEach((e) => {
    answer += Number(e);
  });
  return answer % 9;
}

// 다른사람 풀이
function solution(number) {
  var answer = 0;

  for (let i of number) {     // String도 for of 가능
    answer += Number(i);
  }

  return answer % 9;
}