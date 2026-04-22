import java.util.*;

class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] front = Arrays.copyOfRange(num_list, 0, n);
        int[] back = Arrays.copyOfRange(num_list, n, num_list.length);
        int[] answer = new int[num_list.length];
        
        System.arraycopy(back, 0, answer, 0, back.length);
        System.arraycopy(front, 0, answer, back.length, front.length);
        
        return answer;
    }
}