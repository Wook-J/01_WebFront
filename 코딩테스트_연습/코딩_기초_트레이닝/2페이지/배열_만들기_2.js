function solution(l, r) {
  let answer = [];
  for (let i = l; i <= r; i++) {
    let arr = String(i).split('');
    if (arr.every((ele) => ele == '5' || ele == '0')) answer.push(i);
  }
  if (answer.length == 0) answer = [-1];
  return answer;
}