function solution(arr1, arr2) {
  let answer = 0;
  if (arr1.length != arr2.length) {
    answer = arr1.length > arr2.length ? 1 : (arr1.length == arr2.length ? 0 : -1);
  } else {
    let sumArr1 = arr1.reduce((acc, cur) => acc + cur);
    let sumArr2 = arr2.reduce((acc, cur) => acc + cur);
    answer = sumArr1 > sumArr2 ? 1 : (sumArr1 == sumArr2 ? 0 : -1);
  }

  return answer;
}