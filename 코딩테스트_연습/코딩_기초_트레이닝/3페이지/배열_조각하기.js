function solution(arr, query) {
  query.forEach((e, idx) => {
    idx % 2 == 0 ? arr.splice(e + 1) : arr.splice(0, e);
  });
  return arr;
}

/*
  arr.splice(n) : n번 인덱스를 포함하여 이후 요소 전부 제거한 배열 생성
  arr.splice(n, a) : n번 인덱스부터 a개 요소 삭제
  arr.splice(n, a, '', '' ,...) : n번 인덱스부터 a개 요소 삭제하고 '','',... 추가
*/
