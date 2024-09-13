function solution(array) {
  let maxNumArr = [array[0], 0];
  return array.reduce((acc, cur, idx) => {
    acc = cur > acc[0] ? [cur, idx] : acc;
    return acc;
  }, maxNumArr);
}

// 다른사람 풀이 : Math.max + 스프레드 연산자
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}