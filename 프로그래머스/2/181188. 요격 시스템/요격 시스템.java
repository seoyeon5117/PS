import java.util.Arrays;

class Solution {
    
    public int solution(int[][] targets) {
        int answer = 0;
        Arrays.sort(targets, (a, b) -> a[1] - b[1]);
        
        int missile = -1;
        
        for(int[] target : targets) {
            if(missile <= target[0]) {
                answer++;
                missile = target[1];
            }
        }
        
        return answer;
    }
}