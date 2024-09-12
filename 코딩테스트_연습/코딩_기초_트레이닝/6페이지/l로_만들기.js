function solution(myString) {
  let arr = myString.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 'l') arr[i] = 'l';
  }

  return arr.join('');
}

// 다른사람 풀이 : 스프레드 + map
function solution(myString) {
  return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
}