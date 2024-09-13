function solution(num, total) {
  let answer = [];

  if (num % 2 == 1) {
    for (let i = total / num - (num - 1) / 2; i <= total / num + (num - 1) / 2; i++) answer.push(i);
  } else {
    for (let i = (2 * total / num + 1) / 2 - num / 2; i <= (2 * total / num - 1) / 2 + num / 2; i++) answer.push(i);
  }

  return answer;
}

// 다른사람 풀이 1
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => { return i + min; });
}

// 다른사람 풀이 2
function solution(num, total) {
  const a = (2 * total / num + 1 - num) / 2;
  return Array(num).fill().map((_, i) => i + a)
}