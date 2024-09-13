function solution(array, n) {
  let nearNum = array[0];

  for (let ele of array) {
    if (Math.abs(nearNum - n) > Math.abs(ele - n)) nearNum = ele;
    else if (Math.abs(nearNum - n) == Math.abs(ele - n)) nearNum = Math.min(nearNum, ele);
  }

  return nearNum;
}

// 다른사람 풀이
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}