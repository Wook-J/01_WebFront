function solution(q, r, code) {
  let answer = '';
  for (let i = r; i < code.length; i += q) {
    answer += code.charAt(i);     // code[i] 도 가능!
  }
  return answer;
}

// 다른사람 풀이
function solution(q, r, code) {
  return [...code].filter((e, i) => i % q === r).join('');
}

// filter((value, index) => {return t/f})
// return 값이 t인 value만 배열로 별도 생성

// 다른사람 풀이 2
function solution(q, r, code) {
  var answer = '';

  code.split("").forEach((e, i) => { if (i % q == r) answer += e });
  // code를 배열로 만든 후 forEach문 활용
  return answer;
}