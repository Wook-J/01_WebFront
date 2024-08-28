// 1번째 기능 ---------------------------------------------------------------------------------
// #resName(span) 클릭 시 2가지 기능 수행
// - #resName(span) 숨김처리
// - #resNameInput(input) 출력 + (식당명 입력가능한 상태임)

// #resNameInput(input)에 포커스 해제되면 2가지 기능 수행
// - #resNameInput에 입력된 내용을 #resName(span) 내용을 변경
// - #resNameInput 숨김처리
// - #resName(span) 출력 (다시 원상태로 복구)

const resName = document.getElementById("resName");
const resNameInput = document.getElementById("resNameInput");

resName.addEventListener("click", ()=>{
  resName.style.display = "none";
  resNameInput.style.display = "block";
  resNameInput.focus();
});

resNameInput.addEventListener("blur", ()=>{

  if (resNameInput.value.length ==0){
    resName.innerText = "식당명을 입력하세요";
    resName.style.display = "block";
    resNameInput.style.display= "none";
    return;
  }
  resName.innerText = resNameInput.value;
  resName.style.display = "block";
  resNameInput.style.display= "none";
});

// 2번재 기능 ----------------------------------------------------------------------------------

const normalContainer = document.getElementsByClassName("normal-container");
const editContainer = document.getElementsByClassName("edit-container");
console.log(normalContainer);
// #updateBtn 클릭 시(2-1)
// - normal-container 숨김처리
// - edit-container 출력

document.getElementById("updateBtn").addEventListener("click", ()=>{      // 배열형태로 들어옴!
  normalContainer[0].style.display = "none";
  editContainer[0].style.display = "block";
});

// e.target 이용하기!

// edit-container가 나타난 상태(2-2)
// - 기존 메뉴(span class="menu-name")에 대해서는 음식 메뉴, 가격 변경 가능해야함
//   -> input 창 새로 만들어서 입력해야함
// - 이 상태에서 #exitBtn 클릭하면 "변경된 상태"로 normarl-container 상태로 원상복구
//   -> 1번째 기능에서 구현한 거 다시 만들기!

// #addMenu 누를 시
// - 기존 메뉴에 대해 음식메뉴, 가격 변경 가능(2-2 기능 가져오기)
// - 음식 메뉴, 가격 변경 기능 생성(input 창 새로 만들어서 입력, 위에꺼랑 같은 거 대입)
// - 이 상태에서 #exitBtn 클릭하면 "추가로 생성된 상태"로 normarl-container 상태로 원상복구
//   -> 1번째 기능에서 구현한 거 다시 만들기!

// #deleteMenu 누를 시 메뉴판 내용 자체를 삭제
// - 이 상태에서 #exitBtn 클릭하면 "삭제된 상태"로 normarl-container 상태로 원상복구
// - 17_요소추가제거 도전과제 활용하여 해볼 것