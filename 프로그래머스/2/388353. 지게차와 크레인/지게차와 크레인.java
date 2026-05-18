import java.util.Queue;
import java.util.LinkedList;

class Solution {
    int[] dx = {-1, 0, 1, 0};
    int[] dy = {0, 1, 0, -1};
    int row = 0;
    int col = 0;
    
    private int crane(String alphabet, String[][] map, int left) {
        for(int r = 0 ; r < row ; r++) {
            for(int c = 0 ; c < col ; c++) {
                if(map[r][c].equals(alphabet)) {
                    map[r][c] = " ";
                    left--;
                }
            }
        }
        
        return left;
    }
    
    private boolean[][] getReachable(String[][] map) {
        boolean[][] reachable = new boolean[row][col];
        Queue<int[]> queue = new LinkedList<>();
        
        for(int r = 0 ; r < row ; r++) {
            for(int c = 0 ; c < col ; c++) {
                // 가장자리
                if(map[r][c].equals(" ") && (r == 0 || r == row - 1 || c == 0 || c == col - 1)) {
                    reachable[r][c] = true;
                    queue.add(new int[]{r, c});
                }
            }
        }
        
        while(!queue.isEmpty()) {
            int[] cur = queue.poll();
            int r = cur[0];
            int c = cur[1];
            for(int i = 0 ; i < 4 ; i++) {
                int x = r + dx[i];
                int y = c + dy[i];

                if((x < 0 || x >= row || y < 0 || y >= col)) continue;
                if(reachable[x][y] || !map[x][y].equals(" ")) continue;
                
                reachable[x][y] = true;
                queue.add(new int[]{x, y});
            }
        }
        return reachable;
    }
    
    private int forkLift(String alphabet, String[][] map, int left) {
        boolean[][] reachable = getReachable(map);
        boolean[][] toRemove = new boolean[row][col];
        
        for(int r = 0 ; r < row ; r++) {
            for(int c = 0 ; c < col ; c++) {
                if(map[r][c].equals(alphabet)) {
                    for(int i = 0 ; i < 4 ; i++) {
                        int x = r + dx[i];
                        int y = c + dy[i];
                        if(x < 0 || x >= row || y < 0 || y >= col || reachable[x][y]) {
                            toRemove[r][c] = true;
                            break;
                        }
                    }
                }
            }
        }
        
        for(int r = 0 ; r < row ; r++) {
            for(int c = 0 ; c < col ; c++) {
                if(toRemove[r][c]) {
                    map[r][c] = " ";
                    left--;
                }
            }
        }
        
        return left;
    }
    
    public int solution(String[] storage, String[] requests) {
        row = storage.length;
        col = storage[0].length();
        int left = row * col;
        String[][] map = new String[row][col];
        
        for(int r = 0 ; r < row ; r++) {
            String[] alphabets = storage[r].split("");
            for(int c = 0 ; c < col ; c++) {
                map[r][c] = alphabets[c];
            }
        }
        
        for(String request : requests) {
            if(request.length() == 2) {
                String[] alphabets = request.split("");
                String alphabet = alphabets[0];
                // 모든 컨테이너 꺼내기
                left = crane(alphabet, map, left);
                
            } else {
                // 접근 가능한 컨테이너들 꺼내기
                left = forkLift(request, map, left);
            }
        }
        
        return left;
    }
}