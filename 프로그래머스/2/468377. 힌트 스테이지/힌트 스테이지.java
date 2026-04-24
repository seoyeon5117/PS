import java.util.*;

class Solution {
    public int solution(int[][] cost, int[][] hint) {
        int sum = Integer.MAX_VALUE;
        int n = cost.length;
        int cases = 1 << (n - 1); // 경우의 수는 2 ^ (n - 1)개
        
        for(int mask = 0; mask < cases ; mask++) {
            int[] tickets = new int[n];
            int total = 0;
            boolean valid = true;
            
            for(int i = 0 ; i < n - 1 ; i++) {
                if((mask & (1 << i)) != 0) {
                    // 힌트 삼
                    total += hint[i][0];
                    for(int j = 1 ; j < hint[i].length ; j++) {
                        int stage = hint[i][j] - 1;
                        tickets[stage]++;
                    }
                    
                }
            }
            
            for(int i = 0 ; i < n ; i++) {
                int max = Math.min(tickets[i], n - 1); // 최대 n - 1개 사용 가능
                total += cost[i][max];
            }
            
            sum = Math.min(sum, total);
        }
        
        return sum;
    }
}