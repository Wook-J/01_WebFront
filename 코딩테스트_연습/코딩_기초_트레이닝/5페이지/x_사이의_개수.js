function solution(myString) {

  let arr = myString.split('').reduce((acc, cur, idx) => {
    if (cur == 'x') acc.push(idx);
    return acc;
  }, []);
  arr.push(myString.length);

  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) answer.push(arr[i] - arr[i - 1] - 1);

  return answer;
}

// 다른사람 풀이 split + map : split 활용법익히기
function solution(myString) {
  return myString.split('x').map(v => v.length);
}