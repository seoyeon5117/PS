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
  const N = +input[0];
  const arr = input.slice(1).map(Number);
  const heap = [];

  function insert(value) {
    heap.push(value);
    let absolute;
    if (value >= 0) {
      absolute = value;
    } else {
      absolute = -value;
    }
    let i = heap.length - 1;
    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      let absoluteParent;
      if (heap[parentIdx] >= 0) {
        absoluteParent = heap[parentIdx];
      } else {
        absoluteParent = -heap[parentIdx];
      }
      if (absoluteParent > absolute) {
        [heap[parentIdx], heap[i]] = [heap[i], heap[parentIdx]];
        i = parentIdx;
      } else if (absoluteParent === absolute && heap[parentIdx] > heap[i]) {
        [heap[parentIdx], heap[i]] = [heap[i], heap[parentIdx]];
        i = parentIdx;
      } else {
        break;
      }
    }
  }

  function remove() {
    if (heap.length === 0) return 0;
    const root = heap[0];
    const lastNode = heap.pop();
    if (heap.length > 0) {
      heap[0] = lastNode;
      let i = 0;
      while (true) {
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        let smallest = i;
        let absoluteSmallest;
        if (heap[smallest] >= 0) {
          absoluteSmallest = heap[smallest];
        } else {
          absoluteSmallest = -heap[smallest];
        }
        if (heap.length > left) {
          let absoluteLeft;
          if (heap[left] >= 0) {
            absoluteLeft = heap[left];
          } else {
            absoluteLeft = -heap[left];
          }
          if (absoluteSmallest > absoluteLeft) {
            smallest = left;
            if (heap[smallest] >= 0) {
              absoluteSmallest = heap[smallest];
            } else {
              absoluteSmallest = -heap[smallest];
            }
          } else if (
            absoluteSmallest === absoluteLeft &&
            heap[smallest] > heap[left]
          )
            smallest = left;
          if (heap[smallest] >= 0) {
            absoluteSmallest = heap[smallest];
          } else {
            absoluteSmallest = -heap[smallest];
          }
        }

        if (heap.length > right) {
          let absoluteRight;
          if (heap[right] >= 0) {
            absoluteRight = heap[right];
          } else {
            absoluteRight = -heap[right];
          }
          if (absoluteSmallest > absoluteRight) {
            smallest = right;
            if (heap[right] >= 0) {
              absoluteRight = heap[right];
            } else {
              absoluteRight = -heap[right];
            }
          } else if (
            absoluteSmallest === absoluteRight &&
            heap[smallest] > heap[right]
          )
            smallest = right;
        }
        if (i === smallest) break;
        [heap[smallest], heap[i]] = [heap[i], heap[smallest]];

        i = smallest;
      }
    }
    return root;
  }

  const result = [];
  for (const a of arr) {
    if (a === 0) result.push(remove());
    else insert(a);
  }

  console.log(result.join("\n"));
});
