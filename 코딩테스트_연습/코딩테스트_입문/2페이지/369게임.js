function solution(order) {
  let answer = 0;
  for (let ele of String(order)) {
    if (ele == '3' || ele == '6' || ele == '9') answer++;
  }
  return answer;
}