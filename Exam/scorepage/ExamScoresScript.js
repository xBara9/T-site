let CurrentAccount = localStorage.getItem("CurrentAccount");
let AccountArray = localStorage.getItem("Account").split("_");

for (let i = 0; i < AccountArray.length; i++) {
  let Array = AccountArray[i].split(",");
  if (Array[0] === CurrentAccount) {
    let temp = Array[2].split(".");

    for (let j = 0; j < temp.length - 1; j++) {
      document.write(`<tr>`);
      document.write(`<td>${j + 1}</td>`);
      document.write(`<td>${temp[j]}</td>`);
      document.write(`</tr>`);
    }
    break;
  }
}
