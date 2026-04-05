function solution(n, edge) {
    const heap = [];
    
    function insert(x) {
        heap.push(x);
        let i = 0
        while(i > 0) {
              let parentIdx = Math.floor((i-1)/2);
              if(heap[parentIdx][0] > heap[i][0]) {
                  [heap[parentIdx], heap[i][0]] = [heap[i][0], heap[parentIdx]];
                  i = parentIdx;
              } else {
                  break;
              }
        }
        
    }
    
    function remove() {
        if(heap.length === 0) return;
        let root = heap[0];
        let lastNode = heap.pop();
        
        if(heap.length > 0) {
            heap[0] = lastNode;
            let i = 0;
            while(true) {
                let left = i * 2 + 1;
                let right = i * 2 + 2;
                let smallest = i;
                if(heap.length > left && heap[left][0] > heap[smallest][0]) smallest = left;
                if(heap.length > right && heap[right][0] > heap[smallest][0]) smallest = right;
                if(smallest === i) break;
                [heap[smallest], heap[i]] = [heap[i], heap[smallest]]
                i = smallest;
            }
        }
            
        return root;
    }
    
    const dist = new Array(n + 1).fill(Infinity);
    const graph = Array.from({length: n + 1}, () => []);
    for(let i = 0 ; i < edge.length ; i++) {
        graph[edge[i][0]].push(edge[i][1]);
        graph[edge[i][1]].push(edge[i][0]);
    }
    
    dist[1] = 0;
    insert([0, 1]);  // cost, node
    while(heap.length > 0) {
        const [cost, node] = remove();
        if(cost > dist[node]) continue; // 최단 아님
        for(const next of graph[node]) {
            if(dist[node] + 1 < dist[next]) {
                dist[next] = dist[node] + 1;
                insert([dist[next], next]);
            }
        }
    }
    
    let max = 0;
    for(let i = 0 ; i <= n ; i++) {
        if(dist[i] !== Infinity && max < dist[i]) {
            max = dist[i];
        }
    }
    
    let answer = 0;
    for(let i = 0 ; i <= n ; i++) {
        if(max === dist[i]) {
            answer++;
        }
    }
    
    return answer;
}