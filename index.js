const playerA = ["김소라", "구민근"];
const playerB = ["김태진", "정성우"];

const init = ([playerA, playerB]) => {
  const resetBtn = document.querySelector("#header .reset");
  const saveBtn = document.querySelector("#save");
  const userABox = document.querySelector("#userA");
  const userBBox = document.querySelector("#userB");
  const resultA = document.querySelector("#A_result");
  const resultB = document.querySelector("#B_result");
  const inputA = document.querySelector("#a_round");
  const inputB = document.querySelector("#b_round");
  //실제 게임내 현황판
  const realScore = [0, 0];
  const realRoundScore = [0, 0];
  const history = [];
  const users = [[]];

  //users
  const userA_1 = document.createElement("li");
  const userA_2 = document.createElement("li");
  const userB_1 = document.createElement("li");
  const userB_2 = document.createElement("li");
  //initializing
  const initializing = () => {
    userBBox.innerHTML = "";
    userABox.innerHTML = "";

    userA_1.innerText = playerA[0];
    userA_2.innerText = playerA[1];
    userB_1.innerText = playerB[0];
    userB_2.innerText = playerB[1];

    userABox.appendChild(userA_1);
    userABox.appendChild(userA_2);
    userBBox.appendChild(userB_1);
    userBBox.appendChild(userB_2);
    resultA.innerText = realScore[0];
    resultB.innerText = realScore[0];
    inputA.value = 0;
    inputB.value = 0;
  };
  const renderingHistory = () => {};
  const onChange = (e) => {
    if (e.data !== null && e.data !== "0" && !Number(e.data)) {
      alert("숫자만 입력이 가능합니다.");
      if (e.target.id === "a_round") e.target.value = realRoundScore[0];
      if (e.target.id === "b_round") e.target.value = realRoundScore[1];
    }
    if (e.target.id === "a_round") {
      realRoundScore[0] = Number(e.target.value);
      realRoundScore[1] = 100 - Number(e.target.value);
      inputB.value = realRoundScore[1];
      //티츄 점수카운팅은 나중에
    } else {
      realRoundScore[1] = Number(e.target.value);
      realRoundScore[0] = 100 - Number(e.target.value);
      inputA.value = realRoundScore[0];
    }
  };
  const onSave = () => {
    history.push([...realRoundScore]);
    realScore[0] += realRoundScore[0];
    realScore[1] += realRoundScore[1];
    realRoundScore[0] = 0;
    realRoundScore[1] = 0;
    resultA.innerText = realScore[0];
    resultB.innerText = realScore[1];
    inputA.value = realRoundScore[0];
    inputB.value = realRoundScore[1];
  };

  initializing();
  inputA.addEventListener("input", onChange);
  inputB.addEventListener("input", onChange);
  saveBtn.addEventListener("click", onSave);
};
init([playerA, playerB]);
