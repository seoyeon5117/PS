import java.util.*;

class Solution {
    public int solution(String[] friends, String[] gifts) {
        int cnt = friends.length;
        int[][] arr = new int[cnt][cnt];
        
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        int[] present = new int[cnt];
        
        for(int i = 0 ; i < cnt ; i++) {
            map.put(friends[i], i);
        }
        
        for(String gift : gifts) {
            String[] person = gift.split(" ");
            arr[map.get(person[0])][map.get(person[1])]++;
            present[map.get(person[0])]++;
            present[map.get(person[1])]--;
        }
        
        int[] answer = new int[cnt];
        for(int i = 0 ; i < cnt ; i++) {
            for(int j = 0 ; j < cnt ; j++) {
                if(i == j) continue;
                if(arr[i][j] > arr[j][i]) {
                    answer[i]++;
                } else if(arr[i][j] == arr[j][i]) {
                    if(present[i] > present[j]) {
                        answer[i]++;
                    }
                }
            }
        }
        
        int max = 0;
        for(int a : answer) {
            max = Math.max(max, a);
        }
        
        return max;
    }
}