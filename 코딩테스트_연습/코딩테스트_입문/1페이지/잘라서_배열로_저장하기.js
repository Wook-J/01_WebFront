function solution(my_str, n) {
  let answer = [];
  let myStrArr = my_str.split('');
  let count = 0;
  for (let i = 0; i < myStrArr.length; i += n) {
    answer.push(myStrArr.slice(count, count + n).join(''));
    count += n;
  }
  return answer;
}
// 위의 풀이 간소화(count 별도로 필요없음)
function solution(my_str, n) {
  let answer = [];
  let myStrArr = my_str.split('');
  for (let i = 0; i < myStrArr.length; i += n) {
    answer.push(myStrArr.slice(i, i + n).join(''));
  }
  return answer;
}

// 다른사람 풀이 : my_str을 배열로 만들필요 없음!
function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) answer.push(my_str.slice(i, i + n));
  return answer;
}