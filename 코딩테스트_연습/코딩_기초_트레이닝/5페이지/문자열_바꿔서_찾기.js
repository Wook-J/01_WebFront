function solution(myString, pat) {
  let arr = myString.split('').map((element) => element == 'A' ? 'B' : 'A');
  return arr.join('').indexOf(pat) == -1 ? 0 : 1;
}

// includes 사용하는 방법
function solution(myString, pat) {
  let arr = myString.split('').map((element) => element == 'A' ? 'B' : 'A');

  return arr.join('').includes(pat) ? 1 : 0;
}