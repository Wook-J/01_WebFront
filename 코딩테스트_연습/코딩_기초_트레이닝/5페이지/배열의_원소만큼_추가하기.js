function solution(arr) {
  let answer = [];

  for (element of arr) {
    for (let i = 0; i < element; i++) {
      answer.push(element);
    }
  }

  return answer;
}

// reduce 사용
function solution(arr) {
  return arr.reduce((acc, cur) => {
    for (let i = 0; i < cur; i++) acc.push(cur);
    return acc;
  }, []);
}