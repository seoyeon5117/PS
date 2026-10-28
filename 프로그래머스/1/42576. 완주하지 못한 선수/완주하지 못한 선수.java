import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String, Integer> map = new HashMap<>();
        for(String c : completion) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        for(String p : participant) {
            if(map.containsKey(p)) {
                Integer cnt = map.get(p);
                if(cnt.equals(1)) map.remove(p);
                else map.put(p, cnt - 1);
            } else {
                return p;
            }
        }
        
        return "";
    }
}