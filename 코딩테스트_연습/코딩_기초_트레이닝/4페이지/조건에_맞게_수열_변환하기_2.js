function solution(arr) {
  let answer = 0;
  let flag = true;

  while (flag) {
    let repeatArr = arr.map(num => {
      if (num >= 50 && num % 2 == 0) return num / 2;
      else if (num < 50 && num % 2 == 1) return num * 2 + 1;
      else return num;
    });

    const isAllSame = arr.every((a, i) => a == repeatArr[i])
    if (isAllSame) break;
    answer++;
    arr = repeatArr;
  }

  return answer;
}

// arr.every((element, index)=> {return 조건식})
// arr의 순회하면서 조건식이 하나라도 false 이면 false 반환, 모두 true이면 true 반환