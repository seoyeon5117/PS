class Solution {
    public int solution(int[] players, int m, int k) {
        int answer = 0; // 서버 증설 횟수
        int[] server = new int[24]; // 서버 대수
        
        for(int i = 0 ; i < players.length ; i++) {
            int need = players[i] / m; // 현재 필요
            if (need > server[i]) {
                int addition = need - server[i]; // 추가로 필요
                answer += addition; // 서버 증설 횟수 추가
                for(int j = 0 ; j < k ; j++) {
                    if(i + j >= 24) break;
                    server[i + j] += addition; // 서버 추가
                }
            }
        }
        
        return answer;
    }
}