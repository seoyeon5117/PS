class Solution {
    public String solution(String s) {
        String answer = "";
        String[] arr = s.split("");
        
        int len = s.length();
        int middle = len / 2;
        
        if(len % 2 == 0) {
            // 짝수
            answer = arr[middle - 1] + arr[middle];
        } else {
            answer = arr[middle];
        }
        
        return answer;
    }
}