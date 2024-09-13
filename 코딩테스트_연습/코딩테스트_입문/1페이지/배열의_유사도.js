function solution(s1, s2) {
  let answer = 0;
  s1.forEach((ele) => {
    if (s2.includes(ele)) answer++;
  });
  return answer;
}

// 다른사람 풀이1 : for of문 활용
function solution(s1, s2) {
  let count = 0;
  for (let v of s1) if (s2.includes(v)) count++;
  return count;
}

// 다른사람 풀이 2 : filter 활용
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

// 다른사람 풀이 3 : 기본지식으로 푸는 방법
function solution(s1, s2) {
  let answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) answer++;
    }
  }
  return answer;
}