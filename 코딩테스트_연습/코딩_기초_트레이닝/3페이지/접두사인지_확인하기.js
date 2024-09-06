function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

/*
startsWith(searchString)
-> 문자열 시작부분에 searchString가 있으면 true 반환, 없으면 false 반환

startsWith(searchString, position)
-> position : searchString이 발견될 것으로 예상되는 시작 위치
  (optional, 기본값은 0)
*/