import java.util.*;

class Solution {
    int n, m;
    int[] dx = {-1, 0, 1, 0};
    int[] dy = {0, 1, 0, -1};
    
    public int[] bfs(int i, int j, int[][] land, boolean[][] visited) {
        Queue<int[]> queue = new ArrayDeque<>();
        boolean[] colVisited = new boolean[m]; // 덩어리가 걸쳐져있는 열
        int colCnt = 0;
        int cnt = 0; // 석유 크기
        
        queue.offer(new int[]{i, j});
        visited[i][j] = true;
        
        while(!queue.isEmpty()){
            int[] cur = queue.poll();
            int x = cur[0];
            int y = cur[1];
            cnt++;
            if(!colVisited[y]) {
                colVisited[y] = true;
                colCnt++;
            }
            for(int k = 0 ; k < 4 ; k++) {
                int curX = x + dx[k];
                int curY = y + dy[k];
                if(curX >= 0 && curX < n &&
                  curY >= 0 && curY < m &&
                  !visited[curX][curY]) {
                    visited[curX][curY] = true;
                    if(land[curX][curY] == 1) {
                        queue.offer(new int[]{curX, curY});
                    }
                }
            }
        }
        
        // [cnt, co1, col2, ...]
        int[] result = new int[colCnt + 1];
        result[0] = cnt;
        int idx = 1;
        for(int c = 0 ; c < m ; c++) {
            if(colVisited[c]) {
                result[idx++] = c;
            }
        }
        
        return result;
    }
    
    public int solution(int[][] land) {
        n = land.length;
        m = land[0].length;
        int[] colSum = new int[m];
        
        boolean[][] visited = new boolean[n][m];
        
        for(int i = 0 ; i < n ; i++) {
            for(int j = 0 ; j < m ; j++) {
                if(!visited[i][j] && land[i][j] == 1) {
                    int[] result = bfs(i, j, land, visited);
                    for(int k = 1 ; k < result.length ; k++) {
                        colSum[result[k]] += result[0];
                    }
                }
            }
        }
        
        int max = 0;
        for(int sum : colSum) {
            max = Math.max(max, sum);
        }
        
        return max;
    }
}