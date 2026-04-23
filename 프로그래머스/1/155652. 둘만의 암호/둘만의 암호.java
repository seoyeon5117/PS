class Solution {
    public String solution(String s, String skip, int index) {
        String answer = "";
        
        for(int i = 0 ; i < s.length() ; i++) {
            int ascii = s.charAt(i); // 아스키 코드
            int cnt = 0; // index count
            while(cnt < index) {
                cnt++;
                ascii++;
                
                if(ascii > "z".charAt(0)) {
                    ascii -= "z".charAt(0) - "a".charAt(0) + 1;
                }
                
                while(skip.contains(String.valueOf((char) ascii))) {
                    ascii++;
                    if(ascii > "z".charAt(0)) {
                        ascii -= "z".charAt(0) - "a".charAt(0) + 1;
                    }
                }
            }
            answer += (char) ascii;
        }
        return answer;
    }
}