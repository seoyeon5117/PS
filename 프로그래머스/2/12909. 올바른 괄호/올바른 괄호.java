import java.util.*;

class Solution {
    boolean solution(String s) {
        Deque<Integer> stack = new ArrayDeque<>();
        
        for(int i = 0 ; i < s.length() ; i++) {
            if(s.charAt(i) == '(') stack.add(1);
            else {
                if(stack.isEmpty()) return false;
                stack.pop();
            }
        }

        return stack.isEmpty();
    }
}