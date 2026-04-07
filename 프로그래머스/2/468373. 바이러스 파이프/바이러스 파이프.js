function solution(n, infection, edges, k) {
    const graph = Array.from({ length: n + 1 } , () => Array.from({ length: 3 }, () => []));

    for(let i = 0 ; i < edges.length ; i++) {
        graph[edges[i][0]][edges[i][2] - 1].push(edges[i][1]); // graph[감염][타입 - 1] = 도착
        graph[edges[i][1]][edges[i][2] - 1].push(edges[i][0]);
    }
    
    function spread(infected, pipeType) {
        const newInfected = new Set(infected);
        const queue = [...infected];
        let idx = 0;
        while(queue.length > idx) {
            const cur = queue[idx];
            for(const node of graph[queue[idx]][pipeType]) {
                if(!newInfected.has(node)) {
                    newInfected.add(node);
                    queue.push(node);
                }
            }
            idx++;
        }
        return newInfected;
    }
    
    let max = 0;
    function dfs(step, infected) {
        max = Math.max(max, infected.size);
        if (step === k) return;
        for(let i = 0 ; i < 3 ; i++){
            const next = spread(infected, i);
            
            if(next.size > infected.size) {
                dfs(step + 1, next);
            }
        }
    }
    
    const initialInfected = new Set([infection]);
    dfs(0, initialInfected);
    
    return max;
}