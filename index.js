const playerA = ["김소라", "구민근"];
const playerB = ["김태진", "정성우"];

const init = (players) => {
  const [playerA, playerB] = players;
  const resetBtn = document.querySelector("#header .reset");
  const saveBtn = document.querySelector("#save");
  const userABox = document.querySelector("#userA");
  const userBBox = document.querySelector("#userB");
  const historyBox = document.querySelector("#history .scores");
  const resultA = document.querySelector("#A_result");
  const resultB = document.querySelector("#B_result");
  const inputA = document.querySelector("#a_round");
  const inputB = document.querySelector("#b_round");
  const winBtnA = document.querySelector("#a_win");
  const winBtnB = document.querySelector("#b_win");
  //실제 게임내 현황판
  const realScore = [0, 0];
  let realRound = {
    score: [0, 0],
    state: [
      {
        win: false,
        user: [
          {
            state: "",
            result: true,
          },
          {
            state: "",
            result: true,
          },
        ],
      },
      {
        win: false,
        user: [
          {
            state: "",
            result: true,
          },
          {
            state: "",
            result: true,
          },
        ],
      },
    ],
  };
  const newRound = JSON.stringify(realRound);
  let history = [];

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
      Ascore.innerText = history[i].score[0];
      Bscore.innerText = history[i].score[1];
      delBtn.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-minus-circle fa-w-16 fa-3x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z" class=""></path></svg>`;
      delBtn.addEventListener("click", () => {
        const idx = i;
        const tmpHistory = history.filter((el, index) => index !== idx);
        history = tmpHistory;
        renderingHistory();
      });
      totalScore[0] += Number(history[i].score[0]);
      totalScore[1] += Number(history[i].score[1]);
      roundLi.appendChild(idx);
      roundLi.appendChild(Ascore);
      roundLi.appendChild(Bscore);
      roundLi.appendChild(delBtn);
      historyUl.appendChild(roundLi);
    }
    historyBox.appendChild(historyUl);
    resultA.innerText = totalScore[0];
    resultB.innerText = totalScore[1];
  };
  const renderingUsers = () => {
    userABox.innerHTML = "";
    userBBox.innerHTML = "";
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players[i].length; j++) {
        const userLi = document.createElement("li");
        const userName = document.createElement("div");
        const hiddenUl = document.createElement("ul");
        const largeLi = document.createElement("li");
        const smallLi = document.createElement("li");
        const isSuccess = document.createElement("div");
        const close = document.createElement("div");
        userLi.classList.add("user");
        userName.classList.add("name");
        userName.innerText = players[i][j];
        largeLi.innerText = "Large";
        smallLi.innerText = "Small";
        smallLi.classList.contains;
        isSuccess.classList.add("is-success");
        isSuccess.innerText = "Success";
        close.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-times-circle fa-w-16 fa-5x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" class=""></path></svg>`;
        close.classList.add("close");
        userName.addEventListener("click", (e) => {
          userLi.classList.toggle("active");
        });
        close.addEventListener("click", (e) => {
          userLi.classList.remove("active");
        });
        largeLi.addEventListener("click", (e) => {
          if (!e.target.classList.contains("active")) {
            smallLi.classList.remove("active");
            realRound.state[i].user[j].state = "large";
          } else {
            realRound.state[i].user[j].state = "";
          }
          realRound[i];
          e.target.classList.toggle("active");
        });
        smallLi.addEventListener("click", (e) => {
          if (!e.target.classList.contains("active")) {
            largeLi.classList.remove("active");
            realRound.state[i].user[j].state = "small";
          } else {
            realRound.state[i].user[j].state = "";
          }
          e.target.classList.toggle("active");
        });
        isSuccess.addEventListener("click", (e) => {
          const isBtn = e.target.classList.contains("is-success");
          if (isBtn) {
            let mention = "Success";
            let isSuccessed = true;
            e.target.classList.toggle("off");
            if (e.target.classList.contains("off")) {
              mention = "Fail";
              isSuccessed = false;
              // realRound.state[i][j].result;
            }
            realRound.state[i].user[j].result = isSuccessed;
            e.target.innerText = mention;
            e.target.appendChild(close);
          }
        });
        hiddenUl.appendChild(largeLi);
        hiddenUl.appendChild(smallLi);
        userLi.appendChild(userName);
        userLi.appendChild(hiddenUl);
        isSuccess.appendChild(close);
        userLi.appendChild(isSuccess);
        if (i % 2 === 0) {
          if (j === 0) userLi.classList.add("active");
          userABox.appendChild(userLi);
        } else {
          userBBox.appendChild(userLi);
        }
      }
    }
  };
  //initializing
  const initializing = () => {
    resultA.innerText = realScore[0];
    resultB.innerText = realScore[0];
    inputA.value = 0;
    inputB.value = 0;
    renderingUsers();
    renderingHistory();
    winBtnA.classList.remove("active");
    winBtnB.classList.remove("active");
  };
  const onChange = (e) => {
    if (e.data !== null && e.data !== "0" && !Number(e.data)) {
      alert("숫자만 입력이 가능합니다.");
      if (e.target.id === "a_round") e.target.value = realRound.score[0];
      if (e.target.id === "b_round") e.target.value = realRound.score[1];
    }
    if (e.target.id === "a_round") {
      realRound.score[0] = Number(e.target.value);
      realRound.score[1] = 100 - Number(e.target.value);
      inputB.value = realRound.score[1];
    } else {
      realRound.score[1] = Number(e.target.value);
      realRound.score[0] = 100 - Number(e.target.value);
      inputA.value = realRound.score[0];
    }
  };
  const onSave = () => {
    //여기서 점수 체크
    const nextScores = [...realScore];
    // realRound[0][])
    for (let i = 0; i < realRound.state.length; i++) {
      if (realRound.state[i].win) nextScores[i] += 200;
      for (let j = 0; j < realRound.state[i].user.length; j++) {
        switch (realRound.state[i].user[j].state) {
          case "large":
            if (realRound.state[i].user[j].result) {
              nextScores[i] += 200;
            } else {
              nextScores[i] -= 200;
            }
            break;

          case "small":
            if (realRound.state[0].user[0].result) {
              nextScores[i] += 100;
            } else {
              nextScores[i] -= 100;
            }
            break;
          default:
            break;
        }
      }
    }

    nextScores[0] += realRound.score[0];
    nextScores[1] += realRound.score[1];
    history.push({
      score: nextScores,
      state: JSON.parse(JSON.stringify(realRound.state)),
    });
    realRound = JSON.parse(newRound);
    inputA.value = realRound.score[0];
    inputB.value = realRound.score[1];
    renderingUsers();
    renderingHistory();
    winBtnA.classList.remove("active");
    winBtnB.classList.remove("active");
  };

  initializing();
  winBtnA.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      winBtnB.classList.remove("active");
      inputA.value = 0;
      inputB.value = 0;
      realRound.state[0].win = true;
      realRound.state[1].win = false;
    } else {
      realRound.state[0].win = false;
    }
    e.target.classList.toggle("active");
  });
  winBtnB.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      winBtnA.classList.remove("active");
      inputA.value = 0;
      inputB.value = 0;
      realRound.state[1].win = true;
      realRound.state[0].win = false;
    } else {
      realRound.state[1].win = false;
    }
    e.target.classList.toggle("active");
  });
  inputA.addEventListener("focus", (e) => {
    e.target.closest("input").value = "";
  });
  inputB.addEventListener("focus", (e) => {
    e.target.closest("input").value = "";
  });
  inputA.addEventListener("focusout", (e) => {
    e.target.closest("input").value =
      e.target.closest("input").value === ""
        ? "0"
        : e.target.closest("input").value;
  });
  inputB.addEventListener("focusout", (e) => {
    e.target.closest("input").value =
      e.target.closest("input").value === ""
        ? "0"
        : e.target.closest("input").value;
  });
  inputA.addEventListener("input", onChange);
  inputB.addEventListener("input", onChange);
  saveBtn.addEventListener("click", onSave);
};
init([playerA, playerB]);
