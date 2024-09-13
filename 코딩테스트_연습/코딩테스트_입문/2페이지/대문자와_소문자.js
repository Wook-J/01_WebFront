function solution(my_string) {
  let answer = '';

  for (let ele of my_string.split('')) {
    if (ele == ele.toUpperCase()) answer += ele.toLowerCase();
    else answer += ele.toUpperCase();
  }

  return answer;
}

// 다른사람 풀이 : for of 는 String 타입도 가능!
function solution(my_string) {
  var answer = '';
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}