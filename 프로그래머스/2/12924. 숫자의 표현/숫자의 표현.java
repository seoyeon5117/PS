class Solution {
    public int solution(int n) {
        int answer = 1; // num이 n인 경우
        
        for(int start = 1; start <= n / 2; start++) {
            int end = start + 1;
            int sum = (start + end) * (end - start + 1);
            while(sum <= n * 2) {
                if(sum == n * 2) {
                    answer++;
                    break;
                } else if(sum < n * 2) {
                    end++;
                    sum = (start + end) * (end - start + 1);
                }
            }
        }
        
        return answer;
    }
}