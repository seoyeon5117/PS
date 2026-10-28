import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        Deque<Integer> stack = new ArrayDeque<>();
        
        for(int a : arr) {
            if(stack.isEmpty() || stack.peek() != a) {
                stack.push(a);
            }
        }
        
        int[] result = new int[stack.size()];
        
        for(int i = result.length - 1 ; i >= 0 ; i--) {
            result[i] = stack.pop();
        }

        return result;
    }
}