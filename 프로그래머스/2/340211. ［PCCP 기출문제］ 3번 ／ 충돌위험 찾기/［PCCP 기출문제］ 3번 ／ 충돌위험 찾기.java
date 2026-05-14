import java.util.*;

class Solution {
    public int solution(int[][] points, int[][] routes) {
        int answer = 0;
        
        int n = points.length; // 포인트 길이
        int x = routes.length; // 로봇 수
        int m = routes[0].length; // 들려야하는 좌표 수
        
        int[][] location = new int[x][2]; // 로봇들의 위치
        int[] dest = new int[x]; // 몇 번째 point가 목표인지 저장
        
        for(int r = 0 ; r < x ; r++) {
            location[r] = points[routes[r][0] - 1].clone(); // 초기 위치
            dest[r] = 1;
        }
        
        Set<String> crash = new HashSet<>();
        // 초기 위치 충돌 확인
        for(int i = 0 ; i < x ; i++) {
            for(int j = i+1 ; j < x ; j++) {
                if(Arrays.equals(location[i], location[j])) {
                    crash.add(location[i][0] + "," + location[i][1]);
                }
            }
        }
        answer += crash.size();
        
        
        int arrived = 0;
        int[] done = new int[x]; // 0: 도착x, 1: 도착, 2: 도착하고 벗어남
        
        // 매초 로봇들의 위치 계산해서 충돌 횟수 카운트
        while(arrived < x) {
            
            for(int r = 0 ; r < x ; r++) {
                if(done[r] == 2) continue;
                int[] loc = location[r];
                int curX = loc[0];
                int curY = loc[1];
                int[] destination = points[routes[r][dest[r]] - 1];
                int destX = destination[0];
                int destY = destination[1];
                
                if(curX < destX) {
                    location[r][0] = curX + 1;
                } else if(curX > destX) {
                    location[r][0] = curX - 1;
                } else if(curY < destY) {
                    location[r][1] = curY + 1;
                } else {
                    location[r][1] = curY - 1;
                }
                
                if(Arrays.equals(location[r], destination)) {
                    dest[r]++;
                    
                    if(dest[r] >= m) {
                        arrived++;
                        done[r] = 1;
                    }
                }
            }
            
            crash = new HashSet<>();
            for(int i = 0 ; i < x ; i++) {
                for(int j = i+1 ; j < x ; j++) {
                    if(done[i] != 2 && done[j] != 2 && Arrays.equals(location[i], location[j])) {
                        crash.add(location[i][0] + "," + location[i][1]);
                    }
                }
            }
            answer += crash.size();
            
            for(int r = 0 ; r < x ; r++) {
                if(done[r] == 1) done[r] = 2;
            }
        }
        
        return answer;
    }
}