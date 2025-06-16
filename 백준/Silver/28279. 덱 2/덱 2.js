const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
// 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
// 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 5: 덱에 들어있는 정수의 개수를 출력한다.
// 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
// 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.

rl.on("close", () => {
  const N = +input[0];
  const cmd = input.slice(1).map((line) => line.split(" ").map(Number));

  const result = [];

  function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  function Deque() {
    this.front = null;
    this.rear = null;
    this._size = 0;

    this.pushFront = function (value) {
      const node = new Node(value);

      if (this._size === 0) {
        this.front = node;
        this.rear = node;
      } else {
        node.next = this.front;
        this.front.prev = node;
        this.front = node;
      }

      this._size++;
    };

    this.pushBack = function (value) {
      const node = new Node(value);

      if (this._size === 0) {
        this.front = node;
        this.rear = node;
      } else {
        node.prev = this.rear;
        this.rear.next = node;
        this.rear = node;
      }

      this._size++;
    };

    this.popFront = function () {
      if (this._size === 0) return -1;
      const value = this.front.value;

      if (this._size === 1) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.front.next;
        this.front.prev = null;
      }
      this._size--;

      return value;
    };

    this.popRear = function () {
      if (this._size === 0) return -1;
      const value = this.rear.value;

      if (this._size === 1) {
        this.front = null;
        this.rear = null;
      } else {
        this.rear = this.rear.prev;
        this.rear.next = null;
      }
      this._size--;

      return value;
    };

    this.size = function () {
      return this._size;
    };

    this.isEmpty = function () {
      return this._size === 0 ? 1 : 0;
    };

    this.printFront = function () {
      return this._size === 0 ? -1 : this.front.value;
    };

    this.printRear = function () {
      return this._size === 0 ? -1 : this.rear.value;
    };
  }

  const deque = new Deque();

  for (let i = 0; i < N; i++) {
    if (cmd[i][0] === 1) {
      deque.pushFront(cmd[i][1]);
    } else if (cmd[i][0] === 2) {
      deque.pushBack(cmd[i][1]);
    } else if (cmd[i][0] === 3) {
      result.push(deque.popFront());
    } else if (cmd[i][0] === 4) {
      result.push(deque.popRear());
    } else if (cmd[i][0] === 5) {
      result.push(deque.size());
    } else if (cmd[i][0] === 6) {
      result.push(deque.isEmpty());
    } else if (cmd[i][0] === 7) {
      result.push(deque.printFront());
    } else if (cmd[i][0] === 8) {
      result.push(deque.printRear());
    }
  }

  console.log(result.join("\n"));
});
