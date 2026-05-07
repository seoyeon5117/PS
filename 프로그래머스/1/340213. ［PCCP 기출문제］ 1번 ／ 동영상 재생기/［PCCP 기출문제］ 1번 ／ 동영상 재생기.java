class Solution {
    int parseToSec(String string_time) {
        String[] string = string_time.split(":");
        int min = Integer.parseInt(string[0]);
        int sec = Integer.parseInt(string[1]);
        return min * 60 + sec;
    }
    
    public String solution(String video_len, String pos, String op_start, String op_end, String[] commands) {
        int video = parseToSec(video_len); // 비디오 길이
        int current = parseToSec(pos); // 현재
        int start = parseToSec(op_start); // 오프닝 시작
        int end = parseToSec(op_end); // 오프닝 끝
        
        if(current >= start && current < end) {
            current = end;
        }
        
        for(String command : commands) {
            if(command.equals("next")) {
                current = Math.min(video, current + 10);
            } else if(command.equals("prev")) {
                current = Math.max(0, current - 10);
            }
            
            if(current >= start && current <= end) {
                current = end;
            }
        }
        
        return String.format("%02d:%02d", current / 60, current % 60);
    }
}