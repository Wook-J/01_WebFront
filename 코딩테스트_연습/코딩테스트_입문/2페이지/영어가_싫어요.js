function solution(numbers) {
  let numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  numStr.forEach((ele, idx) => {
    numbers = numbers.replaceAll(ele, idx);
  });
  return Number(numbers);
}