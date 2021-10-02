//첫 유저 이름
const playerA = ["김소라", "구민근"];
const playerB = ["김태진", "정성우"];
let lastHistory = []; // 리셋 버튼 눌릴때마다 히스토리 들어가도록 해놨습니다.

const resetFunc = (resetUser, finHistory) => {
  // 유저이름 넣으면 리셋버튼 눌릴때 변경 됩니다.
  resetUser([
    ["설영환", "코콰"],
    ["장한별", "민경배"],
  ]);
  lastHistory = finHistory;
  // 여기에 리셋 되도록 하는거 넣으면 됩니다.
  console.log(lastHistory);
};
// 승리시 이 함수 실행이 됩니다. 함수명은 변경하면 안되고.. 함수 내용은 예제 내용입니다.
const winFunc = (finHistory, winUsers, loseUsers) => {
  alert(`${winUsers[0]}, ${winUsers[1]}팀 승리!`);
  console.log(winUsers, loseUsers);
  console.log(finHistory);
};

//이함수가 실행되면 모든 이벤트가 들어갑니다.
init([playerA, playerB]);
