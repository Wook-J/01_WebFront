function solution(arr) {
  let answer = [];
  let lowIdx = arr.length;
  let highIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
      if (i < lowIdx) lowIdx = i;
      if (i > highIdx) highIdx = i;
    }
  }
  if (lowIdx != arr.length) answer = arr.slice(lowIdx, highIdx + 1);
  else answer = [-1];

  return answer;
}

// 다른사람 풀이
function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}

/* indexOf(searchElement)
 * indexOf(searchElement, fromIndex)
 * arr.indexof(n) : 배열의 0번 index요소부터 n를 찾아 최초로 나온 index, 없으면 -1 반환
*/

/* lastIndexOf(searchElement)
 * lastIndexOf(searchElement, fromIndex)
 * arr.lastIndexOf(n) : 배열의 마지막 index요소부터 n를 찾아 최초로 나온 index, 없으면 -1 반환
*/