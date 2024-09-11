function solution(arr, k) {
  let arrFilter = arr.filter((element, idx) => arr.indexOf(element) == idx);
  let answer = [];

  if (arrFilter.length > k) {
    for (let i = 0; i < k; i++) answer.push(arrFilter[i]);
  } else {
    for (let i = 0; i < arrFilter.length; i++) answer.push(arrFilter[i]);
    for (let i = arrFilter.length; i < k; i++) answer.push(-1);
  }

  return answer;
}