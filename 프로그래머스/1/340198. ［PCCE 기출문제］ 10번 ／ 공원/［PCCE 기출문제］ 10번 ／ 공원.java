import java.util.*;

class Solution {
    boolean canReplace(int a, int b, int size, String[][] park) {
        for(int i = a; i < a + size; i++) {
            for(int j = b; j < b + size; j++) {
                if(i >= park.length || j >= park[0].length) return false;
                if(!park[i][j].equals("-1")) {
                    return false;
                }
            }
        }
        return true;
    }
    
    public int solution(int[] mats, String[][] park) {
        int answer = 0;
        int largest = 0;
        
        for(int i = 0; i < park.length; i++) {
            for(int j = 0; j < park[i].length; j++) {
                for(int size = 1; size <= 20 ; size++) {
                    if(canReplace(i, j, size, park)) {
                        largest = Math.max(largest, size);
                    } else {
                        break;
                    }
                }
            }
        }
        
        for(int mat : mats) {
            if(mat <= largest) {
                answer = Math.max(answer, mat);
            }
        }
        
        return answer == 0 ? -1 : answer;
    }
}