import java.util.*;

class Solution {
    public int solution(String[][] book_time) {
        int answer = 0;
        Arrays.sort(book_time, (a, b) -> a[0].compareTo(b[0]));
        List<int[]> book_min = new ArrayList<>();
        
        for(String[] bt : book_time) {
            String[] start_string = bt[0].split(":");
            String[] end_string = bt[1].split(":");
            int start_min = Integer.parseInt(start_string[0]) * 60 + Integer.parseInt(start_string[1]);
            int end_min = Integer.parseInt(end_string[0]) * 60 + Integer.parseInt(end_string[1]);
            book_min.add(new int[]{start_min, end_min});
        }
        
        PriorityQueue<Integer> queue = new PriorityQueue<>(); // 사용 중인 방들의 퇴실 시간
        
        for(int i = 0; i < book_min.size() ; i++) {
            if(queue.size() == 0) {
                queue.offer(book_min.get(i)[1]); // 퇴실 시간
                answer++;
            } else {
                if(book_min.get(i)[0] >= queue.peek() + 10) {
                    queue.poll(); // 방 빼고
                    queue.offer(book_min.get(i)[1]); // 사용
                } else {
                    answer++; // 방 새로 추가
                    queue.offer(book_min.get(i)[1]);
                }
            }
        }
        
        return answer;
    }
}