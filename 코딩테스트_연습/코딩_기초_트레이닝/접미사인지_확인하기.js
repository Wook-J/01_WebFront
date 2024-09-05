function solution(my_string, is_suffix) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string.slice(i, my_string.length));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === is_suffix) {
      answer = 1;
      break;
    }
  }
  return answer;
}

// 다른 풀아
function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
/*
String.prototype.endsWith(searchString)
-> 문자열 끝에 searchString가 있으면 true 반환, 없으면 false 반환

String.prototype.endsWith(searchString, endPosition)
-> endPosition : searchString이 발견될 것으로 예상되는 끝 위치
  (optional, 기본값은 str.length임)
*/