function solution(priorities, location) {
    class Deque {
        constructor() {
            this.items = [];
            this.head = 0;
            this.tail = 0;
        }
        
        push(item) {
            this.items[this.tail] = item;
            this.tail++;
        }
        
        shift() {
            if(this.head === this.tail) return undefined;
            const item = this.items[this.head];
            delete this.items[this.head];
            this.head++;
            return item;
        }
        
        size() {
            return this.tail - this.head;
        }
    }
    
    const deque = new Deque();
    const stack = [...priorities].sort((a, b) => a - b);
    const priority = priorities[location];
    
    for(let i = 0 ; i < priorities.length ; i++) {
        if(i === location) deque.push(0);
        else deque.push(priorities[i]);
    }
    
    let cnt = 0;
    while(deque.size() > 0) {
        const p = deque.shift();
        if(p === 0 && stack[stack.length - 1] === priority) {
            return ++cnt;
        }
        if(stack[stack.length - 1] !== p) {
            deque.push(p);
        } else {
            stack.pop();
            cnt++;
        }
    }
    
    return cnt;
}