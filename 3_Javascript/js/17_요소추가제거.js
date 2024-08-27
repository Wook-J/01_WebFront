const container = document.querySelector(".container");
const addBtn = document.querySelector("#add");            // 추가 버튼
const calcBtn = document.querySelector("#calc");          // 계산 버튼

addBtn.addEventListener("click", () => {
  const row = document.createElement("div");              // <div class="row"></div>
  row.classList.add("row");

  const inputNumber = document.createElement("input");    // <input type="number" class="input-number">
  inputNumber.type = "number";
  inputNumber.classList.add("input-number");

  // inputNumber.setAttribute("type", "number");          // input 태그의 type속성이 number로 됨
  // inputNumber.setAttribute("class", "input-number");   // input 태그의 class속성이 input-number로 됨

  // 도전과제
  const removeRow = document.createElement("span");       // <span clss="remove-row">&times;</span>
  removeRow.classList.add("remove-row");
  removeRow.innerHTML = "&times;";

  row.append(inputNumber, removeRow);     // inputNumber, removeRow를 row 내부에 넣기
  container.append(row);                  // row를 container 내부에 넣기

  // 클릭된 x 버튼의 부모 요소(div.row) 제거------------------------------
  removeRow.addEventListener("click", (e) => {
    
    // 현재 이벤트가 발생한 요소(클릭된 x 버튼)의 부모 요소 선택
    const parent = e.target.parentElement;        // == span 태그의 parent 요소(div.row)
    parent.remove();                              // 위 parent 요소의 제거
  });

});

calcBtn.addEventListener("click", () => {
  const inputNumList = document.getElementsByClassName("input-number");
  let sum = 0;

  for (let i = 0; i < inputNumList.length; i++) {
    sum += Number(inputNumList[i].value);     // 항상 인덱스를 생각하면서 가져오기..!
  }

  alert(`입력된 모든 요소의 총합 : ${sum}`);
});