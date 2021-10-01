const playerA = ["김소라", "구민근"];
const playerB = ["김태진", "정성우"];

const init = ([playerA, playerB]) => {
  const resetBtn = document.querySelector("#header .reset");
  const saveBtn = document.querySelector("#save");
  const userABox = document.querySelector("#userA");
  const userBBox = document.querySelector("#userB");
  const historyBox = document.querySelector("#history .scores");
  const resultA = document.querySelector("#A_result");
  const resultB = document.querySelector("#B_result");
  const inputA = document.querySelector("#a_round");
  const inputB = document.querySelector("#b_round");
  //실제 게임내 현황판
  const realScore = [0, 0];
  const realRoundScore = [0, 0];
  let history = [];
  const users = [[]];

  const renderingHistory = () => {
    const totalScore = [0, 0];
    historyBox.innerHTML = "";
    if (history.length === 0) {
      const noData = document.createElement("span");
      noData.classList.add("no-data");
      noData.innerText = "no data";
      historyBox.appendChild(noData);
      resultA.innerText = totalScore[0];
      resultB.innerText = totalScore[1];
      return;
    }
    const historyUl = document.createElement("ul");
    historyUl.classList.add("histories");
    for (let i = history.length - 1; i > -1; i--) {
      const roundLi = document.createElement("li");
      const idx = document.createElement("span");
      const Ascore = document.createElement("div");
      const Bscore = document.createElement("div");
      const delBtn = document.createElement("button");
      roundLi.classList.add("round");
      idx.innerText = i + 1;
      Ascore.innerText = history[i][0];
      Bscore.innerText = history[i][1];
      delBtn.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-minus-circle fa-w-16 fa-3x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z" class=""></path></svg>`;
      delBtn.addEventListener("click", () => {
        const idx = i;
        const tmpHistory = history.filter((el, index) => index !== idx);
        history = tmpHistory;
        renderingHistory();
      });
      totalScore[0] += Number(history[i][0]);
      totalScore[1] += Number(history[i][1]);
      roundLi.appendChild(idx);
      roundLi.appendChild(Ascore);
      roundLi.appendChild(Bscore);
      roundLi.appendChild(delBtn);
      historyUl.appendChild(roundLi);
      //여기서 create 후 넣기
    }
    historyBox.appendChild(historyUl);
    resultA.innerText = totalScore[0];
    resultB.innerText = totalScore[1];
  };
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
    renderingHistory();
  };
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
    realRoundScore[0] = 0;
    realRoundScore[1] = 0;
    inputA.value = realRoundScore[0];
    inputB.value = realRoundScore[1];
    renderingHistory();
  };

  initializing();

  inputA.addEventListener("input", onChange);
  inputB.addEventListener("input", onChange);
  saveBtn.addEventListener("click", onSave);
};
init([playerA, playerB]);
