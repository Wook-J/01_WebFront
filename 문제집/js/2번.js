let numbers = [1, 2, 3, 4, 5];                    // 배열 선언

const ulTag = document.getElementById("ulTag");   // #ulTag 불러오기

for(let i=0; i<numbers.length;i++){
  const result = document.createElement("li");    // li내에 추가할 내용 선언
  result.innerText = 2* numbers[i];               // 선언한 내용에 2배로 만든 값 대입
  ulTag.append(result);                           // #ulTag 내에 추가하기!
}