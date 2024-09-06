function solution(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 == 1) strArr[i] = strArr[i].toUpperCase();
    else strArr[i] = strArr[i].toLowerCase();
  }
  return strArr;
}

// 다른사람 풀이
function solution(strArr) {
  return strArr.map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase());
}