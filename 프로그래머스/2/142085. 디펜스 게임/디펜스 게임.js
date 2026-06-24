function solution(n, k, enemy) {
    const heap = []; // 최소힙
    
    function insert(x) {
        heap.push(x);
        let i = heap.length - 1;
        while(i > 0) {
            const p = Math.floor((i - 1) / 2);
            if(heap[p] < heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
        
    }
    
    function remove() {
        if(heap.length === 0) return;
        
        const root = heap[0];
        const lastNode = heap.pop();
        const n = heap.length;
        if(n > 0) {
            heap[0] = lastNode;
            let i = 0;
            while(true) {
                let smallest = i;
                const left = i * 2 + 1;
                const right = i * 2 + 2;
                if(left < n && heap[left] < heap[smallest]) smallest = left;
                if(right < n && heap[right] < heap[smallest]) smallest = right;
                if(smallest === i) break;
                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
        }
        
        return root;
    }
    
    for(let i = 0 ; i < enemy.length ; i++) {
        const e = enemy[i];
        if(heap.length < k) {
            insert(e);
        } else {
            if(heap.length > 0 && heap[0] < e) {
                n -= remove();
                insert(e);
            } else {
                n -= e;
            }
            if(n < 0) return i;
        }
    }
    return enemy.length;
}