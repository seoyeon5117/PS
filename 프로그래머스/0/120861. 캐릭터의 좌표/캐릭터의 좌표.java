class Solution {
    public int[] solution(String[] keyinput, int[] board) {
        int[] answer = {};
        int[] dx = {-1, 0, 1, 0};
        int[] dy = {0, 1, 0, -1};
        int curX = 0;
        int curY = 0;
        int j = 0;
        for(int i = 0 ; i < keyinput.length ; i++) {
            if(keyinput[i].equals("left")) {
                j = 0;
            } else if(keyinput[i].equals("up")) {
                j = 1;
            } else if(keyinput[i].equals("right")) {
                j = 2;
            } else {
                j = 3;
            }
            if(Math.abs(curX + dx[j]) <= (board[0] / 2) &&
               Math.abs(curY + dy[j]) <= (board[1] / 2)) {
                curX += dx[j];
                curY += dy[j];
            }
        }
        return new int[]{curX, curY};
    }
}