function solution(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let answer = "";

  for (let i = 0; i < arr1.length; i++) {
    answer += arr1[i] + arr2[i];
  }

  return answer;
}

function solution(str1, str2) {

  let answer = "";

  for (let i = 0; i < str1.length; i++) {     // 문자열도 길이, index 있음
    answer += str1[i] + str2[i];
  }

  return answer;
}