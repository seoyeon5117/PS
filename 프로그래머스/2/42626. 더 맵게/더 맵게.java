import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int cnt = 0;
        
        for(int i = 0; i < scoville.length; i++) {
            pq.offer(scoville[i]);
        }
        
        if(pq.peek() >= K) return cnt;
        while(pq.size() > 1) {
            int food1 = pq.poll();
            int food2 = pq.poll();
            pq.offer(food1 + food2 * 2);
            cnt++;
            if(pq.peek() >= K) return cnt;
        }
        
        return -1;
    }
}