const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const arr1 = input[0].split(""); // 커서 앞
  const arr2 = []; // 커서 뒤
  const M = +input[1];
  for (let m = 0; m < M; m++) {
    const cmd = input[m + 2];
    if (cmd === "L") {
      if (arr1.length > 0) arr2.push(arr1.pop());
    } else if (cmd === "D") {
      if (arr2.length > 0) arr1.push(arr2.pop());
    } else if (cmd === "B") {
      arr1.pop();
    } else {
      const [_, s] = cmd.split(" ");
      arr1.push(s);
    }
  }

  console.log(arr1.join("") + arr2.reverse().join(""));
});
