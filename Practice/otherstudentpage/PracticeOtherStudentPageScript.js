let AccountArray = localStorage.getItem("Account").split("_");
let scores = new Array();
for (let i = 0; i < AccountArray.length; i++) {
  let Array = AccountArray[i].split(",");
  let temp = Array[3].split(".");
  if (temp.length == 1) continue;
  let score = 0;
  for (let j = 0; j < temp.length - 1; j++) {
    if (temp[j] > score) score = temp[j];
  }
  let userAndScore = {
    user: Array[0],
    score: score,
  };
  scores.push(userAndScore);
}

for (let i = 0; i < scores.length - 1; i++) {
  for (let j = i + 1; j < scores.length; j++) {
    if (Number(Object.values(scores[i])[1]) < Number(Object.values(scores[j])[1])) {
      let temp = scores[i];
      scores[i] = scores[j];
      scores[j] = temp;
    }
  }
}
for (let i = 0; i < scores.length; i++) {
  document.write(`<tr>`);
  document.write(`<td>${i + 1}</td>`);
  document.write(`<td>${Object.values(scores[i])[0]}</td>`);
  document.write(`<td>${Object.values(scores[i])[1]}</td>`);
  document.write(`</tr>`);
}
