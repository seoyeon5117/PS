import java.util.*;

class Solution {
    public int solution(String[][] clothes) {
        Map<String, Integer> map = new HashMap<>();
        
        for(String[] c : clothes) {
            map.put(c[1], map.getOrDefault(c[1], 0) + 1);
        }
        
        int cnt = 1;
        for(Integer v : map.values()) {
            cnt *= (v + 1);
        }
        
        return cnt - 1;
    }
}