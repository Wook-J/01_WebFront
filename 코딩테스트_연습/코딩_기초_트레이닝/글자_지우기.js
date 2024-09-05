function solution(my_string, indices) {
  let arr = my_string.split('');
  let arr2 = arr.reduce((acc, cur) => {
    acc.push(true);
    return acc;
  }, []);

  indices.forEach((value) => arr2[value] = false);

  let answer = '';
  arr.forEach((value, idx) => {
    if (arr2[idx]) answer += value;
  })
  return answer;
}

// includes를 사용할 경우
// includes(searchElement)
// includes(searchElement, fromIndex)
// searchElement : 찾을 값  -> 배열 내에 있으면 true 반환
// fromIndex(option) : 검색을 시작할 0기반 인덱스

function solution(my_string, indices) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) answer += my_string[i];
  }

  return answer;
}