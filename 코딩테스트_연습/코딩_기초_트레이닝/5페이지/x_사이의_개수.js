function solution(myString) {

  let answer = myString.split('').reduce((acc, cur, idx) => {
    if (cur == 'x') acc.push(idx);
    return acc;
  }, []);
  answer.push(myString.length);

  return answer;
}// 진행 중