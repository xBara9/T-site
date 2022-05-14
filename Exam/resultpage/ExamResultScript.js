let CurrentAccount = localStorage.getItem("CurrentAccount");
let AccountArray = localStorage.getItem("Account").split("_");
for (let i = 0; i < AccountArray.length; i++) {
  let Array = AccountArray[i].split(",");
  if (Array[0] === CurrentAccount) {
    let temp = Array[2].split(".");
    document.write(`<h3>${temp[temp.length - 2]}/20</h>`);
  }
}
